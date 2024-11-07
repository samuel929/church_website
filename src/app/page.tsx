"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Clock, Menu, Heart, Book, Music, Users } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function VibrantChurchWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const events = [
    {
      title: "Sunday Service",
      date: "Every Sunday",
      time: "10:00 AM",
      location: "Main Sanctuary",
    },
    {
      title: "Bible Study",
      date: "Every Wednesday",
      time: "7:00 PM",
      location: "Fellowship Hall",
    },
    {
      title: "Youth Group",
      date: "Every Friday",
      time: "6:30 PM",
      location: "Youth Center",
    },
  ];

  const news = [
    {
      title: "New Outreach Program Launched",
      date: "June 1, 2023",
      summary: "Our church has started a new community outreach program...",
    },
    {
      title: "Annual Church Picnic",
      date: "July 15, 2023",
      summary: "Join us for our annual church picnic at Riverside Park...",
    },
    {
      title: "Volunteer Appreciation Week",
      date: "August 7-13, 2023",
      summary:
        "We're celebrating our amazing volunteers with special events...",
    },
  ];

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Registration Successful",
      description: "You have been registered for the event.",
    });
  };

  const handleContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
  };

  return (
    <div className='min-h-screen flex flex-col bg-amber-50'>
      <header className='bg-amber-600 text-white'>
        <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Vibrant Grace Church</h1>
          <nav className='hidden md:block'>
            <ul className='flex space-x-6'>
              <li>
                <a href='#about' className='hover:underline'>
                  About
                </a>
              </li>
              <li>
                <a href='#events' className='hover:underline'>
                  Events
                </a>
              </li>
              <li>
                <a href='#news' className='hover:underline'>
                  News
                </a>
              </li>
              <li>
                <a href='#worship' className='hover:underline'>
                  Worship
                </a>
              </li>
              <li>
                <a href='#donate' className='hover:underline'>
                  Donate
                </a>
              </li>
              <li>
                <a href='#contact' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className='h-6 w-6' />
            <span className='sr-only'>Toggle menu</span>
          </Button>
        </div>
        {isMenuOpen && (
          <nav className='md:hidden bg-amber-700'>
            <ul className='flex flex-col items-center py-4'>
              <li className='py-2'>
                <a href='#about' onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
              </li>
              <li className='py-2'>
                <a href='#events' onClick={() => setIsMenuOpen(false)}>
                  Events
                </a>
              </li>
              <li className='py-2'>
                <a href='#news' onClick={() => setIsMenuOpen(false)}>
                  News
                </a>
              </li>
              <li className='py-2'>
                <a href='#worship' onClick={() => setIsMenuOpen(false)}>
                  Worship
                </a>
              </li>
              <li className='py-2'>
                <a href='#donate' onClick={() => setIsMenuOpen(false)}>
                  Donate
                </a>
              </li>
              <li className='py-2'>
                <a href='#contact' onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className='flex-grow'>
        <section id='about' className='py-16 bg-amber-100'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-6 text-center text-amber-800'>
              Welcome to Vibrant Grace Church
            </h2>
            <div className='max-w-4xl mx-auto text-center'>
              <Image
                src='https://cdn.pixabay.com/photo/2023/07/08/09/53/monastery-8114076_1280.jpg'
                width={800}
                height={300}
                alt='Church building'
                className='rounded-lg shadow-lg mb-6'
              />
              <p className='mb-4 text-amber-900'>
                Vibrant Grace Church is a welcoming and inclusive congregation
                dedicated to spreading God&apos;s love and message of hope.
                Founded in 1950, we have been serving our community for over 70
                years with energy and passion.
              </p>
              <p className='text-amber-900'>
                Our mission is to create a nurturing environment where
                individuals can grow in their faith, build meaningful
                relationships, and make a positive impact in the world around
                them.
              </p>
            </div>
          </div>
        </section>

        <section id='events' className='py-16 bg-amber-200'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-6 text-center text-amber-800'>
              Upcoming Events
            </h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {events.map((event, index) => (
                <Card key={index} className='bg-white'>
                  <CardHeader>
                    <CardTitle className='text-amber-700'>
                      {event.title}
                    </CardTitle>
                    <CardDescription>{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex items-center mb-2'>
                      <Clock className='mr-2 h-4 w-4 text-amber-600' />
                      <span>{event.time}</span>
                    </div>
                    <div className='flex items-center'>
                      <MapPin className='mr-2 h-4 w-4 text-amber-600' />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id='news' className='py-16 bg-amber-50'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-6 text-center text-amber-800'>
              Church News
            </h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {news.map((item, index) => (
                <Card key={index} className='bg-white'>
                  <CardHeader>
                    <CardTitle className='text-amber-700'>
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id='worship' className='py-16 bg-amber-100'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-6 text-center text-amber-800'>
              Worship and Growth
            </h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <Card className='bg-white'>
                <CardHeader>
                  <CardTitle className='text-amber-700 flex items-center'>
                    <Music className='mr-2 h-5 w-5' /> Worship Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Join us for uplifting worship services every Sunday at 10:00
                    AM and 6:00 PM.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-white'>
                <CardHeader>
                  <CardTitle className='text-amber-700 flex items-center'>
                    <Book className='mr-2 h-5 w-5' /> Bible Studies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Deepen your understanding of God&apos;s Word through our
                    various Bible study groups.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-white'>
                <CardHeader>
                  <CardTitle className='text-amber-700 flex items-center'>
                    <Users className='mr-2 h-5 w-5' /> Community Groups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Connect with others and grow together in our community
                    groups.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id='donate' className='py-16 bg-amber-200'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-6 text-amber-800'>
              Support Our Ministry
            </h2>
            <p className='mb-6 text-amber-900 max-w-2xl mx-auto'>
              Your generous donations help us continue our mission and serve our
              community. Every contribution makes a difference.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className='bg-amber-600 hover:bg-amber-700 text-white'>
                  <Heart className='mr-2 h-4 w-4' /> Donate Now
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Choose Donation Method</DialogTitle>
                  <DialogDescription>
                    Select your preferred method of donation. All donations are
                    secure and appreciated.
                  </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                  <Button className='w-full'>Credit Card</Button>
                  <Button className='w-full'>PayPal</Button>
                  <Button className='w-full'>Bank Transfer</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section id='register' className='py-16 bg-amber-50'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-6 text-center text-amber-800'>
              Register for Events
            </h2>
            <div className='max-w-md mx-auto'>
              <form className='space-y-4' onSubmit={handleRegister}>
                <Input
                  type='text'
                  placeholder='Your Name'
                  className='bg-white'
                  required
                />
                <Input
                  type='email'
                  placeholder='Your Email'
                  className='bg-white'
                  required
                />
                <select
                  title='church'
                  name='d'
                  className='w-full p-2 border border-amber-300 rounded-md bg-white'
                  required
                >
                  <option value=''>Select an Event</option>
                  <option value='sunday-service'>Sunday Service</option>
                  <option value='bible-study'>Bible Study</option>
                  <option value='youth-group'>Youth Group</option>
                </select>
                <Button
                  type='submit'
                  className='w-full bg-amber-600 hover:bg-amber-700 text-white'
                >
                  Register
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section id='contact' className='py-16 bg-amber-100'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-6 text-center text-amber-800'>
              Contact Us
            </h2>
            <div className='max-w-md mx-auto'>
              <form className='space-y-4' onSubmit={handleContact}>
                <Input
                  type='text'
                  placeholder='Your Name'
                  className='bg-white'
                  required
                />
                <Input
                  type='email'
                  placeholder='Your Email'
                  className='bg-white'
                  required
                />
                <Textarea
                  placeholder='Your Message'
                  className='bg-white'
                  required
                />
                <Button
                  type='submit'
                  className='w-full bg-amber-600 hover:bg-amber-700 text-white'
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-amber-800 text-white py-8'>
        <div className='container mx-auto px-4 text-center'>
          <p>&copy; 2023 Vibrant Grace Church. All rights reserved.</p>
          <p className='mt-2'>
            123 Main St, Anytown, USA | (555) 123-4567 |
            info@vibrantgracechurch.com
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
