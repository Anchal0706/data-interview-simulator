
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { FeatureCard } from '@/components/FeatureCard';
import { topicNames } from '@/data/questions';
import { ExternalLink, BookOpen, Database, BrainCircuit, Code, GitBranch } from 'lucide-react';

interface SourceItem {
  name: string;
  url: string;
  description: string;
}

interface TopicSources {
  [key: string]: SourceItem[];
}

const OnlineSources = () => {
  const [activeTopic, setActiveTopic] = useState<string>('python');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sources data organized by topic
  const sources: TopicSources = {
    python: [
      {
        name: "Python Documentation",
        url: "https://docs.python.org/3/",
        description: "Official Python documentation - comprehensive guide to Python language features."
      },
      {
        name: "Real Python",
        url: "https://realpython.com/",
        description: "In-depth tutorials on Python programming concepts, data analysis, and more."
      },
      {
        name: "Python for Data Science Handbook",
        url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
        description: "Free online book covering Python basics, NumPy, Pandas, Matplotlib, and Machine Learning."
      }
    ],
    statistics: [
      {
        name: "Khan Academy Statistics",
        url: "https://www.khanacademy.org/math/statistics-probability",
        description: "Free courses on probability, inference, and statistical concepts."
      },
      {
        name: "Seeing Theory",
        url: "https://seeing-theory.brown.edu/",
        description: "Visual introduction to probability and statistics with interactive visualizations."
      },
      {
        name: "StatQuest with Josh Starmer",
        url: "https://www.youtube.com/c/joshstarmer",
        description: "YouTube channel with clear explanations of complex statistical concepts."
      }
    ],
    data_science: [
      {
        name: "Towards Data Science",
        url: "https://towardsdatascience.com/",
        description: "Medium publication featuring articles on all aspects of data science."
      },
      {
        name: "Kaggle",
        url: "https://www.kaggle.com/learn",
        description: "Free courses, competitions, and datasets for hands-on learning."
      },
      {
        name: "DataCamp",
        url: "https://www.datacamp.com/",
        description: "Interactive learning platform with courses on R, Python, SQL, and more."
      }
    ],
    machine_learning: [
      {
        name: "Machine Learning Mastery",
        url: "https://machinelearningmastery.com/",
        description: "Tutorials and practical guides to machine learning algorithms and techniques."
      },
      {
        name: "Andrew Ng's Coursera Courses",
        url: "https://www.coursera.org/instructor/andrewng",
        description: "Highly regarded courses on machine learning and deep learning."
      },
      {
        name: "Distill",
        url: "https://distill.pub/",
        description: "Clear explanations of machine learning concepts with interactive visualizations."
      }
    ],
    sql: [
      {
        name: "Mode Analytics SQL Tutorial",
        url: "https://mode.com/sql-tutorial/",
        description: "Interactive SQL tutorial for beginners to advanced users."
      },
      {
        name: "W3Schools SQL Tutorial",
        url: "https://www.w3schools.com/sql/",
        description: "Comprehensive SQL tutorial with examples and a try-it-yourself editor."
      },
      {
        name: "SQL Zoo",
        url: "https://sqlzoo.net/",
        description: "Interactive SQL exercises for all skill levels."
      }
    ]
  };

  // Topic icons
  const topicIcons = {
    python: <Code size={24} />,
    statistics: <BookOpen size={24} />,
    data_science: <Database size={24} />,
    machine_learning: <BrainCircuit size={24} />,
    sql: <GitBranch size={24} />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight">Learning Resources</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore these curated online resources to boost your data science interview preparation.
              Select a topic to see recommended websites, courses, and tutorials.
            </p>
          </div>
          
          {/* Topic selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {Object.keys(sources).map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                  activeTopic === topic 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {topicIcons[topic as keyof typeof topicIcons]}
                {topicNames[topic]}
              </button>
            ))}
          </div>
          
          {/* Resources for selected topic */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sources[activeTopic].map((source, index) => (
              <a 
                href={source.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index}
                className="block"
              >
                <FeatureCard
                  title={source.name}
                  description={source.description}
                  icon={<ExternalLink size={24} />}
                  className="h-full cursor-pointer hover:bg-primary/5 transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/60">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DataInterviewPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OnlineSources;
