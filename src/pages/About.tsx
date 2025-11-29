import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About ECommerce
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're passionate about bringing you the best products at great prices, 
              with exceptional service that makes your shopping experience unforgettable.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Our Story
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Founded in 2020, ECommerce started as a small team with a big vision: 
                  to create an online shopping platform that puts customers first. We believe 
                  that shopping should be easy, enjoyable, and accessible to everyone.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  What began as a simple idea has grown into a trusted destination for 
                  thousands of customers worldwide. We've carefully curated our product 
                  selection to include only the highest quality items from brands we trust.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Today, we continue to innovate and improve, always keeping our customers' 
                  needs at the heart of everything we do.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                  alt="Our team working together"
                  className="rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Our Values
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                These core values guide everything we do and shape the way we serve our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Customer First
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Every decision we make is guided by what's best for our customers.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Quality Excellence
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We never compromise on quality and only offer products we believe in.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Community Focus
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We're committed to building a community and giving back to society.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Global Reach
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We serve customers worldwide with the same level of care and attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Behind every great company are great people. Meet the team that makes it all happen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                  alt="John Smith, CEO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                  John Smith
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">CEO & Founder</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Passionate about creating exceptional customer experiences and building lasting relationships.
                </p>
              </div>

              <div className="text-center">
                <img
                  src="https://placehold.co/300x300"
                  alt="Sarah Johnson, CTO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                  Sarah Johnson
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">CTO</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Leading our technology vision and ensuring our platform delivers the best user experience.
                </p>
              </div>

              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                  alt="Mike Davis, Head of Operations"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                  Mike Davis
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">Head of Operations</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Ensuring smooth operations and that every order reaches our customers on time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. 
              Our team is always here to help and improve your experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@ecommerce.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;