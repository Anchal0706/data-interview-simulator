
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { FeatureCard } from '@/components/FeatureCard';
import { topicNames } from '@/data/questions';
import { 
  ExternalLink, 
  BookOpen, 
  Database, 
  BrainCircuit, 
  Code, 
  GitBranch,
  Pi,
  FileCode,
  ShieldCheck,
  Youtube
} from 'lucide-react';

interface SourceItem {
  name: string;
  url: string;
  description: string;
  type?: 'article' | 'video' | 'course' | 'book';
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
        description: "Official Python documentation - comprehensive guide to Python language features.",
        type: "article"
      },
      {
        name: "Real Python",
        url: "https://realpython.com/",
        description: "In-depth tutorials on Python programming concepts, data analysis, and more.",
        type: "article"
      },
      {
        name: "Python for Data Science Handbook",
        url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
        description: "Free online book covering Python basics, NumPy, Pandas, Matplotlib, and Machine Learning.",
        type: "book"
      },
      {
        name: "Corey Schafer's Python Tutorials",
        url: "https://www.youtube.com/c/Coreyms",
        description: "Comprehensive Python tutorial series covering everything from the basics to advanced topics.",
        type: "video"
      },
      {
        name: "Python Engineer",
        url: "https://www.youtube.com/c/PythonEngineer",
        description: "Python tutorials with focus on machine learning, deep learning, and data science applications.",
        type: "video"
      }
    ],
    statistics: [
      {
        name: "Khan Academy Statistics",
        url: "https://www.khanacademy.org/math/statistics-probability",
        description: "Free courses on probability, inference, and statistical concepts.",
        type: "course"
      },
      {
        name: "Seeing Theory",
        url: "https://seeing-theory.brown.edu/",
        description: "Visual introduction to probability and statistics with interactive visualizations.",
        type: "article"
      },
      {
        name: "StatQuest with Josh Starmer",
        url: "https://www.youtube.com/c/joshstarmer",
        description: "YouTube channel with clear explanations of complex statistical concepts.",
        type: "video"
      },
      {
        name: "3Blue1Brown - Probability & Statistics",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDOjmo3Y6ADm0ScWAlEXf-fp",
        description: "Visual, intuitive explanations of statistical and mathematical concepts.",
        type: "video"
      },
      {
        name: "Harvard Statistics 110",
        url: "https://projects.iq.harvard.edu/stat110/home",
        description: "Professor Joe Blitzstein's course on probability with video lectures and resources.",
        type: "course"
      }
    ],
    data_science: [
      {
        name: "Towards Data Science",
        url: "https://towardsdatascience.com/",
        description: "Medium publication featuring articles on all aspects of data science.",
        type: "article"
      },
      {
        name: "Kaggle",
        url: "https://www.kaggle.com/learn",
        description: "Free courses, competitions, and datasets for hands-on learning.",
        type: "course"
      },
      {
        name: "DataCamp",
        url: "https://www.datacamp.com/",
        description: "Interactive learning platform with courses on R, Python, SQL, and more.",
        type: "course"
      },
      {
        name: "Data Science at Microsoft",
        url: "https://www.youtube.com/c/MicrosoftDeveloper/playlists?view=50&sort=dd&shelf_id=5",
        description: "Microsoft's data science video series covering various topics and technologies.",
        type: "video"
      },
      {
        name: "Ken Jee - Data Science Career Advice",
        url: "https://www.youtube.com/c/KenJee1",
        description: "Career advice, interview tips, and practical projects for aspiring data scientists.",
        type: "video"
      }
    ],
    machine_learning: [
      {
        name: "Machine Learning Mastery",
        url: "https://machinelearningmastery.com/",
        description: "Tutorials and practical guides to machine learning algorithms and techniques.",
        type: "article"
      },
      {
        name: "Andrew Ng's Coursera Courses",
        url: "https://www.coursera.org/instructor/andrewng",
        description: "Highly regarded courses on machine learning and deep learning.",
        type: "course"
      },
      {
        name: "Distill",
        url: "https://distill.pub/",
        description: "Clear explanations of machine learning concepts with interactive visualizations.",
        type: "article"
      },
      {
        name: "Yannic Kilcher - ML Research Papers",
        url: "https://www.youtube.com/c/YannicKilcher",
        description: "Detailed explanations of the latest research papers in machine learning.",
        type: "video"
      },
      {
        name: "Stanford CS229: Machine Learning",
        url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",
        description: "Stanford's famous machine learning course taught by Andrew Ng.",
        type: "video"
      }
    ],
    sql: [
      {
        name: "Mode Analytics SQL Tutorial",
        url: "https://mode.com/sql-tutorial/",
        description: "Interactive SQL tutorial for beginners to advanced users.",
        type: "course"
      },
      {
        name: "W3Schools SQL Tutorial",
        url: "https://www.w3schools.com/sql/",
        description: "Comprehensive SQL tutorial with examples and a try-it-yourself editor.",
        type: "article"
      },
      {
        name: "SQL Zoo",
        url: "https://sqlzoo.net/",
        description: "Interactive SQL exercises for all skill levels.",
        type: "course"
      },
      {
        name: "Programming with Mosh - SQL",
        url: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
        description: "Complete SQL course covering the fundamentals to advanced topics.",
        type: "video"
      },
      {
        name: "SQL Interview Questions",
        url: "https://datalemur.com/sql-interview-questions",
        description: "Practice SQL interview questions from top tech companies with solutions.",
        type: "article"
      }
    ],
    mathematics: [
      {
        name: "3Blue1Brown",
        url: "https://www.youtube.com/c/3blue1brown",
        description: "Beautiful, visual explanations of mathematical concepts relevant to data science.",
        type: "video"
      },
      {
        name: "MIT OpenCourseWare - Linear Algebra",
        url: "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/",
        description: "Professor Gilbert Strang's renowned course on linear algebra.",
        type: "course"
      },
      {
        name: "Mathematics for Machine Learning",
        url: "https://mml-book.github.io/",
        description: "Free book covering the mathematical foundations needed for machine learning.",
        type: "book"
      },
      {
        name: "Khan Academy - Calculus & Linear Algebra",
        url: "https://www.khanacademy.org/math",
        description: "Free courses on calculus, linear algebra, and other mathematical topics.",
        type: "course"
      },
      {
        name: "The Matrix Calculus You Need For Deep Learning",
        url: "https://explained.ai/matrix-calculus/",
        description: "Practical guide to matrix calculus for deep learning by Jeremy Howard and Terence Parr.",
        type: "article"
      }
    ],
    programming: [
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/",
        description: "Free, comprehensive coding tutorials and projects across various programming languages.",
        type: "course"
      },
      {
        name: "System Design Primer",
        url: "https://github.com/donnemartin/system-design-primer",
        description: "Learn how to design large-scale systems, prepare for system design interviews.",
        type: "article"
      },
      {
        name: "Clean Code: A Handbook of Agile Software Craftsmanship",
        url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
        description: "Robert C. Martin's guide to writing maintainable, professional code.",
        type: "book"
      },
      {
        name: "Missing Semester of CS Education",
        url: "https://missing.csail.mit.edu/",
        description: "MIT course covering essential tools for software development beyond programming languages.",
        type: "course"
      },
      {
        name: "Tech Interview Pro",
        url: "https://www.youtube.com/c/TechInterviewPro",
        description: "Software engineering interview preparation, coding challenges, and career advice.",
        type: "video"
      }
    ],
    ethics: [
      {
        name: "Ethics of AI by MIT",
        url: "https://www.media.mit.edu/courses/the-ethics-of-ai/",
        description: "Course materials on ethical considerations in artificial intelligence development.",
        type: "course"
      },
      {
        name: "Privacy in the Age of Big Data",
        url: "https://www.privacyinternational.org/",
        description: "Resources on data privacy rights, regulations, and best practices.",
        type: "article"
      },
      {
        name: "Fairness and Machine Learning",
        url: "https://fairmlbook.org/",
        description: "Free online textbook about fairness in machine learning systems.",
        type: "book"
      },
      {
        name: "Rachel Thomas: Ethical AI",
        url: "https://www.youtube.com/watch?v=GZaxIqfG0Fo",
        description: "Lecture on the ethical considerations in developing and deploying AI systems.",
        type: "video"
      },
      {
        name: "AI Ethics Guidelines Global Inventory",
        url: "https://algorithmwatch.org/en/ai-ethics-guidelines-global-inventory/",
        description: "Collection of AI ethics guidelines from around the world.",
        type: "article"
      }
    ]
  };

  // Topic icons
  const topicIcons = {
    python: <Code size={24} />,
    statistics: <BookOpen size={24} />,
    data_science: <Database size={24} />,
    machine_learning: <BrainCircuit size={24} />,
    sql: <GitBranch size={24} />,
    mathematics: <Pi size={24} />,
    programming: <FileCode size={24} />,
    ethics: <ShieldCheck size={24} />
  };

  // Resource type icons
  const resourceTypeIcons = {
    article: <BookOpen size={16} className="text-blue-500" />,
    video: <Youtube size={16} className="text-red-500" />,
    course: <Database size={16} className="text-green-500" />,
    book: <BookOpen size={16} className="text-purple-500" />
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
              Select a topic to see recommended websites, courses, videos, and tutorials.
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
                  title={(
                    <div className="flex items-center gap-2">
                      {source.type && resourceTypeIcons[source.type]}
                      <span>{source.name}</span>
                    </div>
                  )}
                  description={source.description}
                  icon={<ExternalLink size={24} />}
                  className="h-full cursor-pointer hover:bg-primary/5 transition-colors"
                />
              </a>
            ))}
          </div>
          
          {/* Resource type legend */}
          <div className="mt-12 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-3">Resource Types:</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                {resourceTypeIcons.article}
                <span>Articles & Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                {resourceTypeIcons.video}
                <span>Video Tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                {resourceTypeIcons.course}
                <span>Courses & Interactive Learning</span>
              </div>
              <div className="flex items-center gap-2">
                {resourceTypeIcons.book}
                <span>Books & Long-form Content</span>
              </div>
            </div>
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
