import HeroSection from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData } from "@/data/landing";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <section id='features' className="py-20 bg-[#fef8fc]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className='mb-4 bg-[#efdaf4] text-[#642b73]' >Feature</Badge>
          </div>
          <h2 className="gradient-title text-3xl font-bold text-center mb-6">
            Everything you need to manage your finances
          </h2>
          <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-12">
            Discover the tools that help you budget smarter, track better, and make data-driven financial decisions - all in one platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="space-y-4 pt-4 ">
                  <div
                    className={`rounded-full p-3 inline-flex items-center justify-center ${feature.bgColor}`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id='howItWorks' className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className='mb-4 bg-[#efdaf4] text-[#642b73]' >How It Works</Badge>
          </div>
          <h2 className="gradient-title text-3xl font-bold text-center mb-6">
            Your Financial Journey, Simplified
          </h2>
          <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-12">
            Setting up your AI-powered financial management dashboard is fast and effortless. Here's how it works.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                <div className="text-xl font-semibold mb-4">{step.title}</div>
                <div className="text-gray-600">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-[#642b73] to-[#c6426e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold text-center mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto text-xl">Join thousands of users who are already managing their finaces smartly with FinSeek</p>
          <Link href='/dashboard'>
            <Button size='lg' className='bg-white text-blue-600 hover:bg-blue-50 animate-bounce'>Start Free Trial</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
