import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { BookOpen, Youtube, Globe, Code, Database, BrainCircuit, FileCode, ShieldCheck, Pi, Search, LineChart } from 'lucide-react';

// Define resource types
interface Resource {
  title: string;
  description: string;
  url: string;
  type: 'video' | 'article' | 'course' | 'book' | 'tool';
}

interface TopicResources {
  [key: string]: {
    title: string;
    icon: React.ReactNode;
    resources: Resource[];
  };
}

const OnlineSources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  
  // Define resources for each topic
  const topicResources: TopicResources = {
    python: {
      title: 'Python',
      icon: <Code size={20} />,
      resources: [
        {
          title: "Python Crash Course",
          description: "A fast-paced, thorough introduction to Python that will have you writing programs, solving problems, and making things that work in no time.",
          url: "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593276036",
          type: "book"
        },
        {
          title: "Automate the Boring Stuff with Python",
          description: "A practical programming guide for automating everyday tasks with Python.",
          url: "https://automatetheboringstuff.com/",
          type: "book"
        },
        {
          title: "Corey Schafer's Python Tutorials",
          description: "Comprehensive YouTube tutorials covering Python basics and advanced topics.",
          url: "https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhjR5TELewWnwOh",
          type: "video"
        },
        {
          title: "Real Python",
          description: "A wealth of Python tutorials, articles, and courses for all skill levels.",
          url: "https://realpython.com/",
          type: "article"
        },
        {
          title: "Python for Data Science and Machine Learning Bootcamp",
          description: "Udemy course covering Python for data analysis, visualization, and machine learning.",
          url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
          type: "course"
        },
      ]
    },
    statistics: {
      title: 'Statistics',
      icon: <LineChart size={20} />,
      resources: [
        {
          title: "Statistics",
          description: "Khan Academy's comprehensive statistics course covering descriptive and inferential statistics.",
          url: "https://www.khanacademy.org/math/statistics-probability",
          type: "course"
        },
        {
          title: "OpenIntro Statistics",
          description: "A free, open-source statistics textbook for introductory courses.",
          url: "https://www.openintro.org/book/os/",
          type: "book"
        },
        {
          title: "StatQuest with Josh Starmer",
          description: "YouTube channel explaining statistics concepts in a clear and engaging way.",
          url: "https://statquest.org/",
          type: "video"
        },
        {
          title: "Seeing Theory",
          description: "A visual introduction to probability and statistics.",
          url: "https://seeing-theory.brown.edu/",
          type: "article"
        },
        {
          title: "Statistics Done Wrong",
          description: "A guide to common statistical errors and how to avoid them.",
          url: "https://www.statisticsdonewrong.com/",
          type: "book"
        },
      ]
    },
    data_science: {
      title: 'Data Science',
      icon: <Database size={20} />,
      resources: [
        {
          title: "Data Science Specialization",
          description: "Coursera's popular data science specialization from Johns Hopkins University.",
          url: "https://www.coursera.org/specializations/jhu-data-science",
          type: "course"
        },
        {
          title: "The Elements of Statistical Learning",
          description: "A classic textbook covering many important topics in statistical learning.",
          url: "https://web.stanford.edu/~hastie/ElemStatLearn/",
          type: "book"
        },
        {
          title: "Towards Data Science",
          description: "A Medium publication with articles on data science, machine learning, and AI.",
          url: "https://towardsdatascience.com/",
          type: "article"
        },
        {
          title: "Kaggle",
          description: "A platform for data science competitions, datasets, and tutorials.",
          url: "https://www.kaggle.com/",
          type: "tool"
        },
        {
          title: "DataCamp",
          description: "Online learning platform with courses on data science, machine learning, and programming.",
          url: "https://www.datacamp.com/",
          type: "course"
        },
      ]
    },
    machine_learning: {
      title: 'Machine Learning',
      icon: <BrainCircuit size={20} />,
      resources: [
        {
          title: "Machine Learning",
          description: "Andrew Ng's famous machine learning course on Coursera.",
          url: "https://www.coursera.org/learn/machine-learning",
          type: "course"
        },
        {
          title: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
          description: "A practical guide to machine learning with Python.",
          url: "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646",
          type: "book"
        },
        {
          title: "Machine Learning Mastery",
          description: "A website with tutorials and resources for machine learning practitioners.",
          url: "https://machinelearningmastery.com/",
          type: "article"
        },
        {
          title: "TensorFlow",
          description: "Google's open-source machine learning framework.",
          url: "https://www.tensorflow.org/",
          type: "tool"
        },
        {
          title: "PyTorch",
          description: "Facebook's open-source machine learning framework.",
          url: "https://pytorch.org/",
          type: "tool"
        },
      ]
    },
    sql: {
      title: 'SQL',
      icon: <Database size={20} />,
      resources: [
        {
          title: "SQLZoo",
          description: "Interactive SQL tutorial with exercises and examples.",
          url: "https://sqlzoo.net/",
          type: "course"
        },
        {
          title: "SQL in 10 Minutes a Day",
          description: "A step-by-step guide to learning SQL.",
          url: "https://www.amazon.com/SQL-Minutes-Sams-Teach-Yourself/dp/0672336073",
          type: "book"
        },
        {
          title: "Mode Analytics SQL Tutorial",
          description: "A comprehensive SQL tutorial for data analysis.",
          url: "https://mode.com/sql-tutorial/",
          type: "article"
        },
        {
          title: "PostgreSQL",
          description: "The official website for the PostgreSQL database.",
          url: "https://www.postgresql.org/",
          type: "tool"
        },
        {
          title: "MySQL",
          description: "The official website for the MySQL database.",
          url: "https://www.mysql.com/",
          type: "tool"
        },
      ]
    },
    programming: {
      title: 'Programming & Software Dev',
      icon: <FileCode size={20} />,
      resources: [
        {
          title: "Clean Code: A Handbook of Agile Software Craftsmanship",
          description: "Robert C. Martin's classic book on writing clean, maintainable code - essential for all programmers.",
          url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
          type: "book"
        },
        {
          title: "Data Structures and Algorithms in Python",
          description: "Comprehensive YouTube course covering essential programming skills for data science.",
          url: "https://www.youtube.com/watch?v=kQDxmjfkIKY",
          type: "video"
        },
        {
          title: "System Design for Data Scientists",
          description: "Article explaining how to approach system design questions in interviews.",
          url: "https://towardsdatascience.com/system-design-for-data-scientists-237eef9b3179",
          type: "article"
        },
        {
          title: "Coding Interview University",
          description: "A complete computer science study plan to become a software engineer.",
          url: "https://github.com/jwasham/coding-interview-university",
          type: "article"
        },
        {
          title: "LeetCode",
          description: "Platform to practice programming problems frequently asked in technical interviews.",
          url: "https://leetcode.com/",
          type: "tool"
        },
      ]
    },
    ethics: {
      title: 'Ethics & Data Privacy',
      icon: <ShieldCheck size={20} />,
      resources: [
        {
          title: "Ethics of AI: A Comprehensive Overview",
          description: "Stanford course on the ethical implications of artificial intelligence systems.",
          url: "https://www.youtube.com/watch?v=iZBXz2J6mJQ",
          type: "video"
        },
        {
          title: "Practical Data Ethics",
          description: "Fast.ai course covering real-world ethical challenges in data science.",
          url: "https://ethics.fast.ai/",
          type: "course"
        },
        {
          title: "Fairness and Machine Learning",
          description: "Comprehensive textbook on limitations and opportunities for fairness in ML.",
          url: "https://fairmlbook.org/",
          type: "book"
        },
        {
          title: "Data Privacy in the Age of AI",
          description: "Article discussing modern challenges to privacy with the rise of AI systems.",
          url: "https://hbr.org/2022/02/navigating-the-new-landscape-of-ai-platforms",
          type: "article"
        },
        {
          title: "Ethics in AI Interview Questions",
          description: "Guide to common ethical questions asked in data science interviews.",
          url: "https://www.datacamp.com/blog/ethics-in-data-science",
          type: "article"
        },
      ]
    },
    mathematics: {
      title: 'Mathematics',
      icon: <Pi size={20} />,
      resources: [
        {
          title: "3Blue1Brown: Essence of Linear Algebra",
          description: "Visual and intuitive explanations of linear algebra concepts crucial for data science.",
          url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
          type: "video"
        },
        {
          title: "Calculus for Machine Learning",
          description: "Khan Academy's comprehensive calculus course with applications to ML.",
          url: "https://www.khanacademy.org/math/multivariable-calculus",
          type: "course"
        },
        {
          title: "Mathematics for Machine Learning",
          description: "Book covering the mathematical concepts needed for modern machine learning.",
          url: "https://mml-book.github.io/",
          type: "book"
        },
        {
          title: "Probability for Data Science",
          description: "UC Berkeley's course on probability theory for data science applications.",
          url: "https://www.youtube.com/playlist?list=PLwRJQ4m4UJjNBPJdt8WamRAt4XKc639wF",
          type: "video"
        },
        {
          title: "Discrete Mathematics for Computer Science",
          description: "Harvard's guide to the discrete math concepts used in computer science.",
          url: "https://www.cs.princeton.edu/courses/archive/fall21/cos340/",
          type: "course"
        },
      ]
    }
  };
  
  // Get all resource items for search functionality
  const allResources = Object.values(topicResources).flatMap(topic => 
    topic.resources.map(resource => ({
      ...resource,
      topic: topic.title
    }))
  );
  
  // Filter resources based on search term and selected topic
  const filteredResources = allResources.filter(resource => {
    const matchesSearch = !searchTerm || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesTopic = !selectedTopic || 
      Object.keys(topicResources).find(key => 
        topicResources[key].title === resource.topic
      ) === selectedTopic;
      
    return matchesSearch && matchesTopic;
  });
  
  // Icon component for resource type
  const ResourceTypeIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'video':
        return <Youtube size={18} className="text-red-500" />;
      case 'article':
        return <BookOpen size={18} className="text-blue-500" />;
      case 'course':
        return <BookOpen size={18} className="text-green-500" />;
      case 'book':
        return <BookOpen size={18} className="text-purple-500" />;
      case 'tool':
        return <Globe size={18} className="text-amber-500" />;
      default:
        return <Globe size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">Learning Resources</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of resources to enhance your knowledge in data science topics.
            </p>
          </div>
          
          {/* Search and filter controls */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <select
                  className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  value={selectedTopic || ''}
                  onChange={(e) => setSelectedTopic(e.target.value || null)}
                >
                  <option value="">All Topics</option>
                  {Object.entries(topicResources).map(([key, topic]) => (
                    <option key={key} value={key}>{topic.title}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Topic sections or filtered results */}
          {searchTerm || selectedTopic ? (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">
                Search Results {filteredResources.length > 0 ? `(${filteredResources.length})` : ''}
              </h2>
              
              {filteredResources.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredResources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col h-full"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <ResourceTypeIcon type={resource.type} />
                          <span className="text-xs font-medium uppercase text-muted-foreground">
                            {resource.type}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground bg-gray-100 px-2 py-1 rounded-full">
                          {resource.topic}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground text-sm flex-grow">{resource.description}</p>
                      <div className="mt-4 pt-4 border-t border-gray-100 text-primary text-sm">
                        View Resource →
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg">
                  <p className="text-lg text-muted-foreground">No resources match your search criteria.</p>
                  <button
                    onClick={() => {setSearchTerm(''); setSelectedTopic(null);}}
                    className="mt-4 primary-button"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Show all topics when no search/filter is active
            <div className="space-y-16">
              {Object.entries(topicResources).map(([key, topic]) => (
                <div key={key} className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {topic.icon}
                    </div>
                    <h2 className="text-2xl font-semibold">{topic.title}</h2>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {topic.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col h-full"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <ResourceTypeIcon type={resource.type} />
                          <span className="text-xs font-medium uppercase text-muted-foreground">
                            {resource.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                        <p className="text-muted-foreground text-sm flex-grow">{resource.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-primary text-sm">
                          View Resource →
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/60">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DataCrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OnlineSources;

function LineChart(props: { size: number }) {
  return <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size} 
    height={props.size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>;
}
