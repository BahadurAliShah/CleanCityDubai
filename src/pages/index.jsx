import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LogoCloud } from '@/components/LogoCloud'
import { Incentive } from "@/components/Incentive";
import { Testimonials } from '@/components/Testimonials'
import { FeatureSection } from "@/components/FeatureSection";
import Services from "@/components/services";

import { PageTitle, ServicesList, FeatureSection1, FeatureSection2, IncentiveSection, TestimonialSection, LogoSection } from '@/assets/indexPageContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>{PageTitle}</title>
        <meta
          name="description"
          content="Clean City Dubai Cleaning Service"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services services={ServicesList}/>
        <FeatureSection features={FeatureSection1}/>
        <Incentive incentives={IncentiveSection} />
        <FeatureSection features={FeatureSection2}/>
        <Testimonials data={TestimonialSection} />
        <LogoCloud logos={LogoSection} />
      </main>
      <Footer />
    </>
  )
}
