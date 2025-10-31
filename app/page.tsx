"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Car,
  ChevronRight,
  Cpu,
  Database,
  Globe,
  Leaf,
  MessageSquare,
  Calculator,
  Trophy,
  Users,
  Mail,
  Phone,
  MonitorSmartphone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
        <div className="relative w-full h-screen">
  <Image
    src="/photos/8.png"
    alt="Agriculture Technology"
    fill
    className="object-cover opacity-20"
    priority
  />
</div>


        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Agridrive
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Revolutionizing agriculture through intelligent automation and sustainable practices
          </p>
          <Button size="lg" className="mr-4" onClick={() => scrollToSection('about')}>
            Learn More <ChevronRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
            Contact Us <MessageSquare className="ml-2" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About Agridrive</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Problem</h3>
              <p className="text-muted-foreground mb-6">
                Traditional farming faces numerous challenges including labor shortages,
                inefficient resource utilization, and unpredictable yields. These issues
                significantly impact agricultural productivity and sustainability.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
              <p className="text-muted-foreground">
                Agridrive offers a cutting-edge technology platform that leverages automation,
                real-time analytics, and intelligent control systems to optimize water and
                fertilizer usage, automate field operations with minimal human intervention,
                maximize crop yield and profitability, and reduce the environmental footprint
                through precision agriculture.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/photos/7.jpg"
                alt="Smart Farming"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Cpu className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-semibold mb-2">Raspberry Pi 4/5</h3>
              <p className="text-sm text-muted-foreground">Edge Computing & Control</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-semibold mb-2">MongoDB</h3>
              <p className="text-sm text-muted-foreground">Data Storage & Analytics</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="font-semibold mb-2">AI/ML</h3>
              <p className="text-sm text-muted-foreground">Intelligent Decision Making</p>
            </Card>
            <Card className="p-6 text-center">
              <MonitorSmartphone className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-semibold mb-2">Web Application</h3>
              <p className="text-sm text-muted-foreground">Cross-platform Access</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Car className="w-8 h-8 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-3">Autonomous Navigation</h3>
              <p className="text-muted-foreground">
                Smart pathfinding and obstacle avoidance for efficient field operations
              </p>
            </Card>
            <Card className="p-6">
              <Calculator className="w-8 h-8 mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-3">Evapotranspiration (ET) Calculation</h3>
              <p className="text-muted-foreground">
                Real-time ET computation for optimized irrigation management
              </p>
            </Card>
            <Card className="p-6">
              <Globe className="w-8 h-8 mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-3">Weather Integration</h3>
              <p className="text-muted-foreground">
                Adaptive operation scheduling based on weather forecasts and live data
              </p>
            </Card>
            <Card className="p-6">
              <Leaf className="w-8 h-8 mb-4 text-emerald-500" />
              <h3 className="text-xl font-semibold mb-3">Crop Health Monitoring</h3>
              <p className="text-muted-foreground">
                AI-based detection of crop diseases and growth stage analysis
              </p>
            </Card>
            <Card className="p-6">
              <MonitorSmartphone className="w-8 h-8 mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold mb-3">IoT Dashboard</h3>
              <p className="text-muted-foreground">
                Centralized control for real-time field and sensor data visualization
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 flex items-start space-x-4">
              <Trophy className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart India Hackathon 2024</h3>
                <p className="text-muted-foreground">Winner - Ministry of Jal Shakti</p>
              </div>
            </Card>
            <Card className="p-6 flex items-start space-x-4">
              <Trophy className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Atal Mission Presentation</h3>
                <p className="text-muted-foreground">Recognized for Agricultural Innovation</p>
              </div>
            </Card>
            <Card className="p-6 flex items-start space-x-4">
              <Trophy className="w-8 h-8 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">KPIT Sparkle 2025</h3>
                <p className="text-muted-foreground">Selected for Innovation Excellence</p>
              </div>
            </Card>
            <Card className="p-6 flex items-start space-x-4">
              <Trophy className="w-8 h-8 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">AIU ANVESHAN 2024-25</h3>
                <p className="text-muted-foreground">Selected Participant</p>
              </div>
            </Card>
            <Card className="p-6 flex items-start space-x-4">
              <Trophy className="w-8 h-8 text-indigo-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">eYuva Yesummit</h3>
                <p className="text-muted-foreground">Featured Project Presentation</p>
              </div>
            </Card>
            <Card className="p-6 flex items-start space-x-4">
              <Trophy className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">BGBS 2025</h3>
                <p className="text-muted-foreground">Project Presentation at Bengal Global Business Summit</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/photos/1.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Subhajit Mondal</h3>
              <p className="text-muted-foreground mb-3">Project Lead</p>
              <Link
                href="https://www.linkedin.com/in/subhajit-mondal-8ba7b2259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUR8pmOHsRGiXAQ2stg1Vrg%3D%3D"
                target="_blank"
                className="text-blue-500 hover:text-blue-600"
              >
                LinkedIn Profile
              </Link>
            </Card>
            <Card className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/photos/3.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />

              </div>
              <h3 className="text-xl font-semibold mb-2">Vidisha Das</h3>
              <p className="text-muted-foreground mb-3">ML Engineer</p>
              <Link
                href="https://www.linkedin.com/in/vidisha-das-077b51291?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCrDcYK2oSI%2BefojKGwljSA%3D%3D"
                target="_blank"
                className="text-blue-500 hover:text-blue-600"
              >
                LinkedIn Profile
              </Link>
            </Card>
            <Card className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/photos/4.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Arpita Das</h3>
              <p className="text-muted-foreground mb-3">Full Stack Developer</p>
              <Link
                href="https://www.linkedin.com/in/arpita-das-6642a2290?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKh4vg5v4Scq0ud84HC5Y3w%3D%3D"
                target="_blank"
                className="text-blue-500 hover:text-blue-600"
              >
                LinkedIn Profile
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:agridrive06@gmail.com" className="text-muted-foreground hover:text-blue-500">
                    agridrive06@gmail.com
                  </a>
                </div>
              </Card>
              <Card className="p-6 flex items-center space-x-4">
                <Phone className="w-6 h-6 text-green-500" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+918240635799" className="text-muted-foreground hover:text-green-500">
                    +91 8240635799
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Agridrive. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}