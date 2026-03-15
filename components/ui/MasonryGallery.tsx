'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MasonryGalleryProps {
    images: string[];
    altTextPrefix?: string;
    altTexts?: string[];
    columns?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    gap?: number;
    rounded?: boolean;
    aspectRatioVariation?: boolean;
}

interface GalleryColumnItem {
    src: string;
    originalIndex: number;
}

export default function MasonryGallery({
    images,
    altTextPrefix = 'Gallery image',
    altTexts,
    columns = { mobile: 1, tablet: 2, desktop: 3 },
    gap = 4,
    rounded = true,
    aspectRatioVariation = true,
}: MasonryGalleryProps) {
    const [imageAspectRatios, setImageAspectRatios] = useState<Record<string, number>>({});

    const gapStyle = `${gap * 0.25}rem`;

    const safeColumns = useMemo(
        () => ({
            mobile: columns.mobile || 1,
            tablet: columns.tablet || 2,
            desktop: columns.desktop || 3,
        }),
        [columns.desktop, columns.mobile, columns.tablet],
    );

    useEffect(() => {
        let isMounted = true;

        [...new Set(images)].forEach((src) => {
            if (imageAspectRatios[src]) return;

            const img = new window.Image();
            img.onload = () => {
                if (!isMounted || !img.naturalWidth || !img.naturalHeight) return;

                setImageAspectRatios((prev) => {
                    if (prev[src]) return prev;
                    return {
                        ...prev,
                        [src]: img.naturalWidth / img.naturalHeight,
                    };
                });
            };
            img.src = src;
        });

        return () => {
            isMounted = false;
        };
    }, [images, imageAspectRatios]);

    const { mobileColumns, tabletColumns, desktopColumns } = useMemo(() => {
        const mobileColumns: GalleryColumnItem[][] = Array.from({ length: safeColumns.mobile }, () => []);
        const tabletColumns: GalleryColumnItem[][] = Array.from({ length: safeColumns.tablet }, () => []);
        const desktopColumns: GalleryColumnItem[][] = Array.from({ length: safeColumns.desktop }, () => []);

        images.forEach((image, index) => {
            const item: GalleryColumnItem = { src: image, originalIndex: index };
            mobileColumns[index % safeColumns.mobile].push(item);
            tabletColumns[index % safeColumns.tablet].push(item);
            desktopColumns[index % safeColumns.desktop].push(item);
        });

        return { mobileColumns, tabletColumns, desktopColumns };
    }, [images, safeColumns.desktop, safeColumns.mobile, safeColumns.tablet]);

    // Randomized aspect ratios for variety (Pinterest-style)
    const getAspectRatio = (imageSrc: string, index: number): string | number => {
        const detectedRatio = imageAspectRatios[imageSrc];
        if (detectedRatio) return detectedRatio;

        if (!aspectRatioVariation) return '1 / 1';
        
        const ratios = [
            '3 / 4',   // Portrait
            '4 / 3',   // Landscape
            '1 / 1',   // Square
            '16 / 9',  // Wide
            '2 / 3',   // Tall portrait
            '5 / 4',   // Slight landscape
        ];
        
        // Use index to deterministically select ratio
        return ratios[index % ratios.length];
    };

    if (images.length === 0) {
        return null;
    }

    const renderColumn = (columnImages: GalleryColumnItem[], columnIndex: number) => (
        <div key={columnIndex} className="flex flex-col" style={{ gap: gapStyle }}>
            {columnImages.map((imageItem) => {
                const globalIndex = imageItem.originalIndex;
                return (
                    <motion.div
                        key={`${imageItem.src}-${globalIndex}`}
                        className={`
                            relative overflow-hidden bg-neutral-100
                            ${rounded ? 'rounded-xl' : ''}
                            cursor-default
                        `}
                        style={{ aspectRatio: getAspectRatio(imageItem.src, globalIndex) }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            delay: globalIndex * 0.05,
                            duration: 0.4,
                        }}
                    >
                        <Image
                            src={imageItem.src}
                            alt={altTexts?.[globalIndex] || `${altTextPrefix} ${globalIndex + 1}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain"
                            quality={85}
                            loading={globalIndex === 0 ? 'eager' : 'lazy'}
                        />
                    </motion.div>
                );
            })}
        </div>
    );

    return (
        <div className="w-full">
            <div className="hidden lg:grid" style={{ gridTemplateColumns: `repeat(${safeColumns.desktop}, 1fr)`, gap: gapStyle }}>
                {desktopColumns.map((columnImages, columnIndex) => {
                    return renderColumn(columnImages, columnIndex);
                })}
            </div>

            <div className="hidden md:grid lg:hidden" style={{ gridTemplateColumns: `repeat(${safeColumns.tablet}, 1fr)`, gap: gapStyle }}>
                {tabletColumns.map((columnImages, columnIndex) => {
                    return renderColumn(columnImages, columnIndex);
                })}
            </div>

            <div className="grid md:hidden" style={{ gridTemplateColumns: `repeat(${safeColumns.mobile}, 1fr)`, gap: gapStyle }}>
                {mobileColumns.map((columnImages, columnIndex) => {
                    return renderColumn(columnImages, columnIndex);
                })}
            </div>
        </div>
    );
}