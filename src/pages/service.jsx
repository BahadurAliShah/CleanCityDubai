import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import {ContentSection} from "@/components/ContentSection";
import {Faqs} from "@/components/Faqs";

export default function Service() {
    return (
        <>
            <Head>
                <title>Clean City. Building Cleaning Service</title>
                <meta
                    name="description"
                    content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
                />
            </Head>
            <Header />
            <main>
                <Hero />
                <ContentSection />
                <Faqs />
            </main>
            <Footer />
        </>
    )
}
