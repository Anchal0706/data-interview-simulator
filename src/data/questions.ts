
export interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  explanation: string;
  topic: 'python' | 'statistics' | 'data_science' | 'machine_learning' | 'sql';
  difficulty: 'easy' | 'medium' | 'hard';
}

// Python Questions
export const pythonQuestions: Question[] = [
  {
    id: 1,
    topic: 'python',
    difficulty: 'easy',
    question: "What is the difference between a list and a tuple in Python?",
    correctAnswer: "Lists are mutable (can be changed) while tuples are immutable (cannot be changed). Lists use square brackets [] and tuples use parentheses ().",
    explanation: "This is a fundamental Python concept. Lists allow for operations that modify the collection like append(), remove(), or assignment, while tuples don't allow modification after creation, making them more efficient for data that shouldn't change."
  },
  {
    id: 2,
    topic: 'python',
    difficulty: 'medium',
    question: "Explain list comprehensions in Python and provide an example.",
    correctAnswer: "List comprehensions are a concise way to create lists in Python. Example: [x**2 for x in range(10) if x % 2 == 0] creates a list of squares of even numbers from 0 to 9.",
    explanation: "List comprehensions combine the for loop and conditional logic into a single line. They're more readable and often faster than traditional loops for creating lists."
  },
  {
    id: 3,
    topic: 'python',
    difficulty: 'medium',
    question: "What are Python decorators and how do they work?",
    correctAnswer: "Decorators are functions that modify the behavior of other functions. They use the @decorator syntax and work by taking a function as an argument, extending its behavior, and returning the modified function.",
    explanation: "Decorators are a powerful feature in Python used for aspects like logging, authentication, or performance monitoring without modifying the original function code."
  },
  {
    id: 4,
    topic: 'python',
    difficulty: 'hard',
    question: "Explain the concept of Python generators and their advantages.",
    correctAnswer: "Generators are functions that use 'yield' to return values one at a time, pausing execution between calls. They're memory efficient for large datasets as they generate values on demand rather than storing the entire sequence.",
    explanation: "Generators are crucial for handling large datasets or infinite sequences. Unlike lists, they don't store all values in memory at once, making them perfect for processing big data."
  },
  {
    id: 5,
    topic: 'python',
    difficulty: 'hard',
    question: "What are context managers in Python and how do you create one?",
    correctAnswer: "Context managers are objects that define the methods __enter__ and __exit__, used with the 'with' statement to manage resources. You can create one by defining these methods in a class or using the contextlib.contextmanager decorator on a generator function.",
    explanation: "Context managers ensure proper setup and cleanup of resources like files, connections, or locks, even if errors occur. They help prevent resource leaks and make code cleaner."
  }
];

// Statistics Questions
export const statisticsQuestions: Question[] = [
  {
    id: 1,
    topic: 'statistics',
    difficulty: 'easy',
    question: "What is the difference between a population and a sample?",
    correctAnswer: "A population includes all members of a defined group, while a sample is a subset of the population selected for study. Samples are used to make inferences about the larger population.",
    explanation: "Understanding this distinction is fundamental to statistical analysis. Population parameters are fixed values, while sample statistics are random variables that estimate these parameters."
  },
  {
    id: 2,
    topic: 'statistics',
    difficulty: 'medium',
    question: "Explain the Central Limit Theorem and its importance in statistics.",
    correctAnswer: "The Central Limit Theorem states that the sampling distribution of the mean approaches a normal distribution as the sample size increases, regardless of the population's distribution. This is important because it allows us to make inferences about populations using sample statistics.",
    explanation: "The CLT is fundamental to statistical inference, enabling hypothesis testing and constructing confidence intervals even when working with non-normally distributed data."
  },
  {
    id: 3,
    topic: 'statistics',
    difficulty: 'medium',
    question: "What is the difference between Type I and Type II errors?",
    correctAnswer: "Type I error is rejecting a true null hypothesis (false positive), while Type II error is failing to reject a false null hypothesis (false negative). The probability of Type I error is denoted by alpha (significance level), and Type II error probability is denoted by beta.",
    explanation: "Understanding these errors is crucial in hypothesis testing. Reducing one type of error typically increases the other, requiring careful consideration of the relative costs of each error type."
  },
  {
    id: 4,
    topic: 'statistics',
    difficulty: 'hard',
    question: "Explain the concept of maximum likelihood estimation (MLE).",
    correctAnswer: "Maximum likelihood estimation is a method that determines values for the parameters of a model by maximizing a likelihood function. It finds the parameter values that make the observed data most probable given the model.",
    explanation: "MLE is widely used in statistics and machine learning for parameter estimation. It provides asymptotically unbiased, efficient, and normally distributed estimators under certain conditions."
  },
  {
    id: 5,
    topic: 'statistics',
    difficulty: 'hard',
    question: "What is the difference between Bayesian and Frequentist statistics?",
    correctAnswer: "Frequentist statistics interprets probability as the long-run frequency of events in repeated experiments, while Bayesian statistics interprets probability as a degree of belief that can be updated with new evidence. Bayesians use prior distributions and update them with data to form posterior distributions.",
    explanation: "This fundamental difference in approach affects how statisticians design studies, analyze data, and interpret results. Bayesian methods incorporate prior knowledge, while frequentist methods focus purely on the data at hand."
  }
];

// Data Science Questions
export const dataScienceQuestions: Question[] = [
  {
    id: 1,
    topic: 'data_science',
    difficulty: 'easy',
    question: "What is the difference between supervised and unsupervised learning?",
    correctAnswer: "Supervised learning uses labeled data to train models that can predict outcomes for new data. Examples include classification and regression. Unsupervised learning identifies patterns in unlabeled data through techniques like clustering and dimensionality reduction.",
    explanation: "These are the two main paradigms in machine learning. Supervised learning requires labeled training data, while unsupervised learning works with unlabeled data to find hidden patterns."
  },
  {
    id: 2,
    topic: 'data_science',
    difficulty: 'medium',
    question: "What is the curse of dimensionality and how does it affect machine learning models?",
    correctAnswer: "The curse of dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces that do not occur in low-dimensional settings. As dimensionality increases, the volume of the space increases exponentially, and the available data becomes sparse.",
    explanation: "This sparsity is problematic for any method that requires statistical significance. In machine learning, it can lead to overfitting, increased computational complexity, and difficulty in visualization."
  },
  {
    id: 3,
    topic: 'data_science',
    difficulty: 'medium',
    question: "Explain the concept of cross-validation and why it's important.",
    correctAnswer: "Cross-validation is a resampling procedure used to evaluate machine learning models on limited data. The most common method is k-fold cross-validation, which involves splitting the dataset into k subsets and training the model k times, each time using a different subset as the test set and the remaining data as the training set.",
    explanation: "Cross-validation helps detect overfitting, provides a more accurate measure of model prediction performance, and helps in model selection by comparing different models' performances."
  },
  {
    id: 4,
    topic: 'data_science',
    difficulty: 'hard',
    question: "What is regularization in machine learning and why is it important?",
    correctAnswer: "Regularization is a technique used to prevent overfitting by adding a penalty term to the loss function that discourages complex models. Common methods include L1 (Lasso) and L2 (Ridge) regularization.",
    explanation: "Regularization helps create models that generalize better to unseen data by constraining model parameters. L1 regularization can lead to sparse models (feature selection) while L2 regularization prevents any feature from having a disproportionately large impact."
  },
  {
    id: 5,
    topic: 'data_science',
    difficulty: 'hard',
    question: "Explain the bias-variance tradeoff in machine learning.",
    correctAnswer: "The bias-variance tradeoff is the balance between underfitting (high bias) and overfitting (high variance). High bias models are too simple and miss important patterns, while high variance models are too complex and fit noise. The goal is to find the sweet spot that minimizes total error.",
    explanation: "This fundamental concept in machine learning helps guide model selection and hyperparameter tuning. Total prediction error can be decomposed into bias squared, variance, and irreducible error."
  }
];

// Machine Learning Questions
export const machineLearningQuestions: Question[] = [
  {
    id: 1,
    topic: 'machine_learning',
    difficulty: 'easy',
    question: "What's the difference between a Decision Tree and Random Forest?",
    correctAnswer: "A Decision Tree is a single model that makes decisions based on a series of questions about the features. A Random Forest is an ensemble method that combines multiple decision trees, where each tree is trained on a random subset of the data and features, and the final prediction is the average or majority vote of all trees.",
    explanation: "Random Forests reduce overfitting compared to individual decision trees by averaging multiple trees, reducing variance while maintaining the low bias of decision trees."
  },
  {
    id: 2,
    topic: 'machine_learning',
    difficulty: 'medium',
    question: "Explain the concept of gradient descent in machine learning.",
    correctAnswer: "Gradient descent is an optimization algorithm used to minimize a function by iteratively moving toward the minimum of the function's gradient. In machine learning, it's used to find the parameter values that minimize the loss function.",
    explanation: "There are several variants including batch, stochastic, and mini-batch gradient descent, each with different tradeoffs between computation efficiency and convergence properties."
  },
  {
    id: 3,
    topic: 'machine_learning',
    difficulty: 'medium',
    question: "What are neural networks and how do they work?",
    correctAnswer: "Neural networks are computational models inspired by the human brain, consisting of layers of interconnected nodes (neurons). Each connection has a weight that adjusts during training. Information flows through the network, with each neuron applying an activation function to its inputs, and weights are updated using backpropagation to minimize error.",
    explanation: "Deep neural networks with many layers can learn complex patterns and have revolutionized fields like computer vision, natural language processing, and reinforcement learning."
  },
  {
    id: 4,
    topic: 'machine_learning',
    difficulty: 'hard',
    question: "Explain the concept of support vector machines (SVMs) and kernel tricks.",
    correctAnswer: "SVMs are supervised learning models that find the optimal hyperplane to separate classes in feature space. The kernel trick allows SVMs to operate in a high-dimensional space without explicitly computing the coordinates, by using kernel functions that compute dot products in that space.",
    explanation: "This enables SVMs to find non-linear decision boundaries in the original feature space. Common kernels include linear, polynomial, and radial basis function (RBF)."
  },
  {
    id: 5,
    topic: 'machine_learning',
    difficulty: 'hard',
    question: "What is the concept of ensemble learning and what are some common ensemble methods?",
    correctAnswer: "Ensemble learning combines multiple models to improve overall performance. Common methods include bagging (Random Forests), boosting (AdaBoost, Gradient Boosting), and stacking. These methods reduce variance, bias, or improve predictions by leveraging multiple models' strengths.",
    explanation: "Ensemble methods often outperform individual models by aggregating predictions from diverse models, reducing the risk of overfitting and improving generalization to new data."
  }
];

// SQL Questions
export const sqlQuestions: Question[] = [
  {
    id: 1,
    topic: 'sql',
    difficulty: 'easy',
    question: "What is the difference between INNER JOIN and LEFT JOIN in SQL?",
    correctAnswer: "INNER JOIN returns only the matching rows from both tables. LEFT JOIN returns all rows from the left table and the matching rows from the right table, with NULL values for non-matching right table columns.",
    explanation: "JOIN operations are fundamental to relational databases, allowing you to combine data from multiple tables. Understanding different types of JOINs is crucial for effective data retrieval."
  },
  {
    id: 2,
    topic: 'sql',
    difficulty: 'medium',
    question: "Explain the GROUP BY clause and how it works with aggregate functions.",
    correctAnswer: "GROUP BY divides rows into groups based on specified columns. Aggregate functions (like COUNT, SUM, AVG) then operate on each group rather than the entire result set. The result contains one row per group.",
    explanation: "This combination is powerful for data summarization and analysis, allowing you to answer questions like 'What is the average salary by department?' or 'How many sales per region?'"
  },
  {
    id: 3,
    topic: 'sql',
    difficulty: 'medium',
    question: "What's the difference between WHERE and HAVING clauses?",
    correctAnswer: "WHERE filters rows before grouping and aggregate calculations. HAVING filters groups after GROUP BY and aggregate calculations have been performed. HAVING can reference aggregate functions while WHERE cannot.",
    explanation: "Understanding this distinction is important for writing efficient queries. WHERE reduces the data before aggregation, while HAVING filters the aggregated results."
  },
  {
    id: 4,
    topic: 'sql',
    difficulty: 'hard',
    question: "Explain Common Table Expressions (CTEs) and their advantages.",
    correctAnswer: "Common Table Expressions (CTEs) are temporary named result sets defined with the WITH clause. They improve query readability, allow recursive queries, and can be referenced multiple times within a query. They exist only during query execution.",
    explanation: "CTEs make complex queries more modular and easier to understand, especially for hierarchical data (with recursive CTEs) or when the same subquery is needed multiple times."
  },
  {
    id: 5,
    topic: 'sql',
    difficulty: 'hard',
    question: "What are window functions in SQL and how are they different from aggregate functions?",
    correctAnswer: "Window functions perform calculations across a set of rows related to the current row, without collapsing the result into a single row like aggregate functions do. They use the OVER clause to define the window (partition and order). Examples include ROW_NUMBER(), RANK(), LAG(), and LEAD().",
    explanation: "Window functions are powerful for analytics, allowing calculations like running totals, moving averages, or ranking within groups while preserving the detail rows."
  }
];

// All questions combined for convenience
export const allQuestions: { [key: string]: Question[] } = {
  python: pythonQuestions,
  statistics: statisticsQuestions,
  data_science: dataScienceQuestions,
  machine_learning: machineLearningQuestions,
  sql: sqlQuestions
};

// Map for displaying friendly topic names
export const topicNames: { [key: string]: string } = {
  python: "Python",
  statistics: "Statistics",
  data_science: "Data Science",
  machine_learning: "Machine Learning",
  sql: "SQL"
};
