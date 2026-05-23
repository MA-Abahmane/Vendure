'use client';

import {ProductCard} from "@/components/commerce/product-card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import {FragmentOf} from "@/graphql";
import {ProductCardFragment} from "@/lib/vendure/fragments";
import {useLocale} from 'next-intl';
import {useId} from "react";

interface ProductCarouselClientProps {
    title: string;
    products: Array<FragmentOf<typeof ProductCardFragment>>;
}

export function ProductCarousel({title, products}: ProductCarouselClientProps) {
    const id = useId();
    const locale = useLocale();
    const isRtl = locale === 'ar';

    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        direction: isRtl ? 'rtl' : 'ltr',
                    }}
                    className="w-full"
                >
                    <CarouselContent className={isRtl ? "-mr-2 md:-mr-4" : "-ml-2 md:-ml-4"}>
                        {products.map((product, i) => (
                            <CarouselItem key={id + i}
                                          className={isRtl ? "pr-2 md:pr-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4" : "pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"}>
                                <ProductCard product={product}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex"/>
                    <CarouselNext className="hidden md:flex"/>
                </Carousel>
            </div>
        </section>
    );
}
