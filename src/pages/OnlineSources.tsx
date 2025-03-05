// Fix the LineChart import conflict
import React from 'react';
import Navbar from '@/components/Navbar';
import { LineChart as LineChartIcon, BookOpen, Database, Code, BrainCircuit, Youtube, Video, FileText, GraduationCap } from 'lucide-react';

const OnlineSources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight">Online Resources for Data Science</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore a curated list of online resources to enhance your data science knowledge.
              From courses to blogs, find everything you need to succeed in your data science journey.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Online Courses */}
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-800">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-xl font-semibold">Online Courses</h2>
              </div>
              <div className="space-y-4">
                <ResourceCard
                  title="Coursera"
                  description="Access a wide range of data science courses from top universities."
                  link="https://www.coursera.org/"
                  icon={<GraduationCap size={20} />}
                />
                <ResourceCard
                  title="edX"
                  description="Learn data science with courses and programs from leading institutions."
                  link="https://www.edx.org/"
                  icon={<GraduationCap size={20} />}
                />
                <ResourceCard
                  title="Udacity"
                  description="Upskill with nanodegree programs focused on data science and analytics."
                  link="https://www.udacity.com/"
                  icon={<GraduationCap size={20} />}
                />
              </div>
            </div>
            
            {/* YouTube Channels */}
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-red-100 text-red-800">
                  <Youtube size={24} />
                </div>
                <h2 className="text-xl font-semibold">YouTube Channels</h2>
              </div>
              <div className="space-y-4">
                <ResourceCard
                  title="StatQuest"
                  description="Learn statistics and machine learning concepts in an accessible way."
                  link="https://www.youtube.com/c/joshstarmer"
                  icon={<Youtube size={20} />}
                />
                <ResourceCard
                  title="3Blue1Brown"
                  description="Visualize complex mathematical concepts with stunning animations."
                  link="https://www.youtube.com/c/3blue1brown"
                  icon={<Youtube size={20} />}
                />
                <ResourceCard
                  title="Sentdex"
                  description="Explore Python programming, data analysis, and machine learning tutorials."
                  link="https://www.youtube.com/c/sentdex"
                  icon={<Youtube size={20} />}
                />
              </div>
            </div>
            
            {/* Blogs and Articles */}
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-green-100 text-green-800">
                  <FileText size={24} />
                </div>
                <h2 className="text-xl font-semibold">Blogs and Articles</h2>
              </div>
              <div className="space-y-4">
                <ResourceCard
                  title="Towards Data Science"
                  description="Read articles on data science, machine learning, and AI."
                  link="https://towardsdatascience.com/"
                  icon={<FileText size={20} />}
                />
                <ResourceCard
                  title="Analytics Vidhya"
                  description="Discover tutorials, guides, and resources for data science professionals."
                  link="https://www.analyticsvidhya.com/"
                  icon={<FileText size={20} />}
                />
                <ResourceCard
                  title="KDnuggets"
                  description="Stay updated with the latest news, trends, and insights in data science."
                  link="https://www.kdnuggets.com/"
                  icon={<FileText size={20} />}
                />
              </div>
            </div>
            
            {/* Interactive Platforms */}
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-800">
                  <Code size={24} />
                </div>
                <h2 className="text-xl font-semibold">Interactive Platforms</h2>
              </div>
              <div className="space-y-4">
                <ResourceCard
                  title="Kaggle"
                  description="Participate in data science competitions and explore public datasets."
                  link="https://www.kaggle.com/"
                  icon={<Code size={20} />}
                />
                <ResourceCard
                  title="HackerRank"
                  description="Practice coding and problem-solving skills with data science challenges."
                  link="https://www.hackerrank.com/"
                  icon={<Code size={20} />}
                />
                <ResourceCard
                  title="DataCamp"
                  description="Learn data science interactively with coding exercises and projects."
                  link="https://www.datacamp.com/"
                  icon={<Code size={20} />}
                />
              </div>
            </div>
            
            {/* Podcasts */}
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-purple-100 text-purple-800">
                  <Video size={24} />
                </div>
                <h2 className="text-xl font-semibold">Podcasts</h2>
              </div>
              <div className="space-y-4">
                <ResourceCard
                  title="Data Skeptic"
                  description="Listen to interviews and discussions on data science and machine learning."
                  link="https://dataskeptic.com/"
                  icon={<Video size={20} />}
                />
                <ResourceCard
                  title="Linear Digressions"
                  description="Explore machine learning and data science topics in a fun and accessible way."
                  link="https://lineardigressions.com/"
                  icon={<Video size={20} />}
                />
              </div>
            </div>
            
            {/* Cheat Sheets */}
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-pink-100 text-pink-800">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-xl font-semibold">Cheat Sheets</h2>
              </div>
              <div className="space-y-4">
                <ResourceCard
                  title="Data Science Cheat Sheet"
                  description="Find quick references for data science concepts and techniques."
                  link="https://www.datacamp.com/cheat-sheet"
                  icon={<BookOpen size={20} />}
                />
                <ResourceCard
                  title="Machine Learning Cheat Sheet"
                  description="Get a summary of machine learning algorithms and best practices."
                  link="https://www.kdnuggets.com/2020/02/machine-learning-cheat-sheet.html"
                  icon={<BookOpen size={20} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/60">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DataScienceInterviewPrep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
      {icon}
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </a>
  );
};

export default OnlineSources;
