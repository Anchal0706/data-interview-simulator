export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  topic: 'python' | 'statistics' | 'data_science' | 'machine_learning' | 'sql' | 'mathematics' | 'programming' | 'ethics';
  difficulty: 'easy' | 'medium' | 'hard';
}

// Python Questions
export const pythonQuestions: Question[] = [
  {
    id: 1,
    topic: 'python',
    difficulty: 'easy',
    question: "What is the difference between a list and a tuple in Python?",
    options: [
      "Lists use parentheses while tuples use square brackets",
      "Lists are mutable while tuples are immutable",
      "Tuples can store different data types, lists cannot",
      "Lists are ordered while tuples are unordered"
    ],
    correctAnswerIndex: 1,
    explanation: "Lists are mutable (can be changed) while tuples are immutable (cannot be changed). Lists use square brackets [] and tuples use parentheses ()."
  },
  {
    id: 2,
    topic: 'python',
    difficulty: 'medium',
    question: "What will be the output of the following code?\n\nmy_list = [1, 2, 3, 4]\nprint(my_list[-2])",
    options: [
      "2",
      "3",
      "4",
      "Error"
    ],
    correctAnswerIndex: 1,
    explanation: "In Python, negative indexing starts from the end of the list. my_list[-1] refers to the last element (4), so my_list[-2] refers to the second last element, which is 3."
  },
  {
    id: 3,
    topic: 'python',
    difficulty: 'medium',
    question: "Which of the following is not a valid way to create a list in Python?",
    options: [
      "my_list = []",
      "my_list = list()",
      "my_list = list([1, 2, 3])",
      "my_list = (1, 2, 3)"
    ],
    correctAnswerIndex: 3,
    explanation: "The syntax my_list = (1, 2, 3) creates a tuple, not a list. To create a list, you should use square brackets [] or the list() constructor."
  },
  {
    id: 4,
    topic: 'python',
    difficulty: 'hard',
    question: "What's the time complexity of the following Python operation?\n\nmy_list = [0] * n",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    correctAnswerIndex: 2,
    explanation: "Creating a list with n elements using the * operator has a time complexity of O(n), as Python needs to allocate memory for each of the n elements."
  },
  {
    id: 5,
    topic: 'python',
    difficulty: 'hard',
    question: "What will the following code print?\n\ndef func(x=[]):\n    x.append(1)\n    return x\n\nprint(func())\nprint(func())",
    options: [
      "[1] and [1]",
      "[1] and [1, 1]",
      "[1, 1] and [1, 1, 1]",
      "Error"
    ],
    correctAnswerIndex: 1,
    explanation: "In Python, default arguments are evaluated only once when the function is defined, not each time the function is called. So the list x is created once and reused in each call. The first call appends 1 to the empty list, returning [1]. The second call appends 1 to the already modified list, returning [1, 1]."
  }
];

// Statistics Questions
export const statisticsQuestions: Question[] = [
  {
    id: 1,
    topic: 'statistics',
    difficulty: 'easy',
    question: "What is the difference between a population and a sample?",
    options: [
      "A population is small while a sample is large",
      "A population includes all members of a defined group, while a sample is a subset",
      "A population is theoretical while a sample is practical",
      "They are different names for the same concept"
    ],
    correctAnswerIndex: 1,
    explanation: "A population includes all members of a defined group, while a sample is a subset of the population selected for study. Samples are used to make inferences about the larger population."
  },
  {
    id: 2,
    topic: 'statistics',
    difficulty: 'medium',
    question: "Which of the following is true about the Central Limit Theorem?",
    options: [
      "It states that all samples must be normally distributed",
      "It works only when the original population is normally distributed",
      "It states that the sampling distribution of the mean approaches a normal distribution as sample size increases",
      "It requires at least 100 samples to be applicable"
    ],
    correctAnswerIndex: 2,
    explanation: "The Central Limit Theorem states that the sampling distribution of the mean approaches a normal distribution as the sample size increases, regardless of the population's distribution. This is fundamental to statistical inference."
  },
  {
    id: 3,
    topic: 'statistics',
    difficulty: 'medium',
    question: "Which of the following best describes a Type I error?",
    options: [
      "Failing to reject a false null hypothesis",
      "Rejecting a true null hypothesis",
      "Failing to reject a true null hypothesis",
      "Rejecting a false null hypothesis"
    ],
    correctAnswerIndex: 1,
    explanation: "Type I error is rejecting a true null hypothesis (false positive), while Type II error is failing to reject a false null hypothesis (false negative)."
  },
  {
    id: 4,
    topic: 'statistics',
    difficulty: 'hard',
    question: "In maximum likelihood estimation (MLE), what are we trying to find?",
    options: [
      "The parameters that maximize the probability of observing the data given the model",
      "The data that maximizes the model's parameters",
      "The model that maximizes the probability of the parameters",
      "The maximum number of parameters needed for the model"
    ],
    correctAnswerIndex: 0,
    explanation: "Maximum likelihood estimation is a method that determines values for the parameters of a model by maximizing a likelihood function. It finds the parameter values that make the observed data most probable given the model."
  },
  {
    id: 5,
    topic: 'statistics',
    difficulty: 'hard',
    question: "Which of the following is a key difference between Bayesian and Frequentist statistics?",
    options: [
      "Bayesian statistics can only be used with categorical data",
      "Frequentist methods are always more computationally efficient",
      "Bayesian statistics interprets probability as a degree of belief, while Frequentist interprets it as a long-run frequency",
      "Bayesian methods cannot use prior information"
    ],
    correctAnswerIndex: 2,
    explanation: "Frequentist statistics interprets probability as the long-run frequency of events in repeated experiments, while Bayesian statistics interprets probability as a degree of belief that can be updated with new evidence."
  }
];

// Data Science Questions
export const dataScienceQuestions: Question[] = [
  {
    id: 1,
    topic: 'data_science',
    difficulty: 'easy',
    question: "Which of the following best describes supervised learning?",
    options: [
      "Learning where the algorithm is given labeled training data",
      "Learning where the algorithm finds patterns in unlabeled data",
      "Learning where the algorithm receives feedback through rewards",
      "Learning where the dataset is supervised by experts"
    ],
    correctAnswerIndex: 0,
    explanation: "Supervised learning uses labeled data to train models that can predict outcomes for new data. Examples include classification and regression."
  },
  {
    id: 2,
    topic: 'data_science',
    difficulty: 'medium',
    question: "What problem does the curse of dimensionality often cause?",
    options: [
      "Decreased computational speed only",
      "Data becomes sparse in high-dimensional spaces, making statistical significance difficult",
      "Memory overflow on standard computers",
      "Inability to visualize more than 3 dimensions"
    ],
    correctAnswerIndex: 1,
    explanation: "The curse of dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces. As dimensionality increases, the volume of the space increases exponentially, and the available data becomes sparse."
  },
  {
    id: 3,
    topic: 'data_science',
    difficulty: 'medium',
    question: "What is the primary purpose of cross-validation in machine learning?",
    options: [
      "To increase the training dataset size",
      "To validate credentials of data scientists",
      "To evaluate model performance on data it hasn't seen during training",
      "To cross-check different algorithms against each other"
    ],
    correctAnswerIndex: 2,
    explanation: "Cross-validation is a resampling procedure used to evaluate machine learning models on limited data. It helps detect overfitting and provides a more accurate measure of model prediction performance."
  },
  {
    id: 4,
    topic: 'data_science',
    difficulty: 'hard',
    question: "Which type of regularization is more likely to produce sparse models with some coefficients exactly zero?",
    options: [
      "L1 (Lasso) regularization",
      "L2 (Ridge) regularization",
      "Dropout regularization",
      "Batch normalization"
    ],
    correctAnswerIndex: 0,
    explanation: "L1 (Lasso) regularization can lead to sparse models with some coefficients becoming exactly zero, effectively performing feature selection. L2 (Ridge) regularization typically makes coefficients small but non-zero."
  },
  {
    id: 5,
    topic: 'data_science',
    difficulty: 'hard',
    question: "In the bias-variance tradeoff, which of the following is true?",
    options: [
      "High bias and high variance are both desirable",
      "Low bias and low variance are both achievable with enough data",
      "High bias typically leads to overfitting",
      "High variance typically leads to underfitting"
    ],
    correctAnswerIndex: 1,
    explanation: "In the bias-variance tradeoff, high bias typically leads to underfitting (not overfitting), while high variance leads to overfitting. The goal is to find the model complexity that minimizes total error."
  }
];

// Machine Learning Questions
export const machineLearningQuestions: Question[] = [
  {
    id: 1,
    topic: 'machine_learning',
    difficulty: 'easy',
    question: "What's the main advantage of Random Forest over a single Decision Tree?",
    options: [
      "Random Forests are always faster to train",
      "Random Forests reduce overfitting by averaging multiple decision trees",
      "Random Forests can handle categorical features while Decision Trees cannot",
      "Random Forests require less memory"
    ],
    correctAnswerIndex: 1,
    explanation: "Random Forests reduce overfitting compared to individual decision trees by averaging multiple trees, reducing variance while maintaining the low bias of decision trees."
  },
  {
    id: 2,
    topic: 'machine_learning',
    difficulty: 'medium',
    question: "What problem does gradient descent solve in machine learning?",
    options: [
      "It prevents overfitting",
      "It normalizes input features",
      "It finds parameter values that minimize the loss function",
      "It selects the best features for the model"
    ],
    correctAnswerIndex: 2,
    explanation: "Gradient descent is an optimization algorithm used to minimize a function by iteratively moving toward the minimum of the function's gradient. In machine learning, it's used to find the parameter values that minimize the loss function."
  },
  {
    id: 3,
    topic: 'machine_learning',
    difficulty: 'medium',
    question: "What is backpropagation in neural networks?",
    options: [
      "A technique to initialize weights in reverse order",
      "An algorithm to compute gradients and update weights during training",
      "A method to propagate inputs through the network backwards",
      "A way to reduce network depth"
    ],
    correctAnswerIndex: 1,
    explanation: "Backpropagation is an algorithm that computes the gradient of the loss function with respect to each weight by the chain rule, moving backward from the output. It's used to update weights during neural network training."
  },
  {
    id: 4,
    topic: 'machine_learning',
    difficulty: 'hard',
    question: "What does the kernel trick accomplish in Support Vector Machines?",
    options: [
      "It reduces computation time by simplifying the decision boundary",
      "It allows SVMs to work with fewer support vectors",
      "It enables SVMs to find non-linear decision boundaries without explicitly computing transformations",
      "It combines multiple SVMs into an ensemble model"
    ],
    correctAnswerIndex: 2,
    explanation: "The kernel trick allows SVMs to operate in a high-dimensional space without explicitly computing the coordinates, by using kernel functions that compute dot products in that space. This enables SVMs to find non-linear decision boundaries."
  },
  {
    id: 5,
    topic: 'machine_learning',
    difficulty: 'hard',
    question: "Which ensemble method typically builds models sequentially, with each new model correcting errors made by previous ones?",
    options: [
      "Bagging (e.g., Random Forest)",
      "Boosting (e.g., AdaBoost, Gradient Boosting)",
      "Stacking",
      "Simple averaging"
    ],
    correctAnswerIndex: 1,
    explanation: "Boosting methods like AdaBoost and Gradient Boosting build models sequentially, with each new model focusing on correcting the errors made by previous models. This differs from bagging methods like Random Forest, which build models independently."
  }
];

// SQL Questions
export const sqlQuestions: Question[] = [
  {
    id: 1,
    topic: 'sql',
    difficulty: 'easy',
    question: "Which JOIN type returns only the matching rows from both tables?",
    options: [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL OUTER JOIN"
    ],
    correctAnswerIndex: 2,
    explanation: "INNER JOIN returns only the matching rows from both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, while RIGHT JOIN does the opposite."
  },
  {
    id: 2,
    topic: 'sql',
    difficulty: 'medium',
    question: "What's the correct order of execution for the following SQL clauses?",
    options: [
      "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY",
      "FROM, SELECT, WHERE, GROUP BY, HAVING, ORDER BY",
      "FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY",
      "SELECT, FROM, GROUP BY, WHERE, HAVING, ORDER BY"
    ],
    correctAnswerIndex: 1,
    explanation: "The logical order of SQL query processing is: FROM (and JOINs), WHERE, GROUP BY, HAVING, SELECT, ORDER BY. This is why you can't reference aliases created in the SELECT clause in your WHERE clause."
  },
  {
    id: 3,
    topic: 'sql',
    difficulty: 'medium',
    question: "When would you use a HAVING clause instead of a WHERE clause?",
    options: [
      "When you need to filter based on calculated aggregate values",
      "When you need to filter multiple conditions",
      "When you want to improve query performance",
      "When you're using a subquery"
    ],
    correctAnswerIndex: 0,
    explanation: "You use HAVING to filter groups based on aggregate function results (like COUNT, SUM, AVG) after GROUP BY, while WHERE filters individual rows before grouping."
  },
  {
    id: 4,
    topic: 'sql',
    difficulty: 'hard',
    question: "What's a key advantage of using Common Table Expressions (CTEs)?",
    options: [
      "They're always faster than subqueries",
      "They can be used to write recursive queries",
      "They automatically create indexes",
      "They enforce data integrity constraints"
    ],
    correctAnswerIndex: 1,
    explanation: "One key advantage of CTEs is their ability to write recursive queries, which is particularly useful for hierarchical or tree-structured data like organizational charts or bill of materials."
  },
  {
    id: 5,
    topic: 'sql',
    difficulty: 'hard',
    question: "What's the difference between a correlated and non-correlated subquery?",
    options: [
      "Correlated subqueries are faster",
      "Non-correlated subqueries can only return single values",
      "Correlated subqueries reference columns from the outer query",
      "Non-correlated subqueries can only be used in the WHERE clause"
    ],
    correctAnswerIndex: 2,
    explanation: "A correlated subquery references columns from the outer query and must be re-evaluated for each row processed by the outer query. A non-correlated subquery is independent of the outer query and executes once."
  }
];

// Mathematics Questions
export const mathematicsQuestions: Question[] = [
  {
    id: 1,
    topic: 'mathematics',
    difficulty: 'easy',
    question: "What is the time complexity of binary search?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    correctAnswerIndex: 1,
    explanation: "Binary search has a time complexity of O(log n) because with each comparison, it eliminates half of the remaining elements from consideration."
  },
  {
    id: 2,
    topic: 'mathematics',
    difficulty: 'medium',
    question: "What does the Singular Value Decomposition (SVD) of a matrix provide?",
    options: [
      "Only the determinant of the matrix",
      "A method to simplify matrix multiplication",
      "A way to decompose a matrix into simpler, meaningful components",
      "A technique to solve only square matrices"
    ],
    correctAnswerIndex: 2,
    explanation: "SVD decomposes a matrix into the product of three matrices: U, Σ, and V*, where U and V* are orthogonal matrices and Σ is a diagonal matrix containing singular values. This decomposition reveals important properties of the original matrix."
  },
  {
    id: 3,
    topic: 'mathematics',
    difficulty: 'medium',
    question: "In linear algebra, what is the rank of a matrix?",
    options: [
      "The number of rows in the matrix",
      "The largest value in the matrix",
      "The number of linearly independent rows or columns",
      "The determinant of the matrix"
    ],
    correctAnswerIndex: 2,
    explanation: "The rank of a matrix is the maximum number of linearly independent rows (or equivalently, columns) in the matrix. It provides information about the dimensionality of the vector space spanned by its rows or columns."
  },
  {
    id: 4,
    topic: 'mathematics',
    difficulty: 'hard',
    question: "Which of the following is TRUE about eigenvalues and eigenvectors?",
    options: [
      "Only square matrices have eigenvalues",
      "A matrix and its transpose always have the same eigenvectors",
      "The sum of eigenvalues equals the trace of the matrix",
      "Eigenvectors corresponding to different eigenvalues are always orthogonal"
    ],
    correctAnswerIndex: 2,
    explanation: "The sum of eigenvalues of a matrix equals the trace of the matrix (the sum of its diagonal elements). This is a key property in linear algebra known as the trace-determinant relation."
  },
  {
    id: 5,
    topic: 'mathematics',
    difficulty: 'hard',
    question: "What is the Markov property in stochastic processes?",
    options: [
      "The property that states all events are mutually exclusive",
      "The property that the future state depends only on the present state, not on the past states",
      "The property that states all events have equal probability",
      "The property that the process always converges to a steady state"
    ],
    correctAnswerIndex: 1,
    explanation: "The Markov property (or memoryless property) states that the probability of future states depends only on the present state, not on the sequence of events that preceded it. This is fundamental to Markov chains and many stochastic processes."
  }
];

// Programming & Software Development Questions
export const programmingQuestions: Question[] = [
  {
    id: 1,
    topic: 'programming',
    difficulty: 'easy',
    question: "What is the difference between compiled and interpreted languages?",
    options: [
      "Compiled languages are always faster than interpreted languages",
      "Interpreted languages require a separate compilation step before execution",
      "Compiled languages are translated to machine code before execution, while interpreted languages are translated at runtime",
      "Interpreted languages can't handle object-oriented programming"
    ],
    correctAnswerIndex: 2,
    explanation: "Compiled languages (like C++ or Rust) translate code to machine code before execution, while interpreted languages (like Python or JavaScript) translate code at runtime, line by line. Each approach has its advantages in terms of performance, development speed, and portability."
  },
  {
    id: 2,
    topic: 'programming',
    difficulty: 'medium',
    question: "What are the key principles of SOLID in object-oriented design?",
    options: [
      "Security, Optimization, Logging, Inheritance, Deployment",
      "Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion",
      "Serialization, Optimization, Linking, Indexing, Debugging",
      "Scoping, Objects, Lists, Interfaces, Delegation"
    ],
    correctAnswerIndex: 1,
    explanation: "SOLID stands for: Single Responsibility Principle (a class should have one reason to change), Open/Closed Principle (open for extension, closed for modification), Liskov Substitution Principle (derived classes must be substitutable for base classes), Interface Segregation Principle (clients shouldn't depend on interfaces they don't use), and Dependency Inversion Principle (depend on abstractions, not concretions)."
  },
  {
    id: 3,
    topic: 'programming',
    difficulty: 'medium',
    question: "What is the purpose of a version control system like Git?",
    options: [
      "To optimize code compilation speed",
      "To automatically fix bugs in code",
      "To track changes, manage different versions, and facilitate collaboration",
      "To enforce specific programming paradigms"
    ],
    correctAnswerIndex: 2,
    explanation: "Version control systems like Git track changes to a codebase over time, allow developers to work on different versions (branches) simultaneously, and provide tools to merge changes and resolve conflicts, facilitating collaborative software development."
  },
  {
    id: 4,
    topic: 'programming',
    difficulty: 'hard',
    question: "Which of the following best describes the CAP theorem in distributed systems?",
    options: [
      "You can have at most two of: Consistency, Availability, and Partition tolerance",
      "Consistency And Persistence are the only important factors in database design",
      "Cached Applications Perform better than non-cached ones",
      "Concurrency, Atomicity, and Persistence are guaranteed in all distributed databases"
    ],
    correctAnswerIndex: 0,
    explanation: "The CAP theorem states that a distributed data store can provide at most two out of three guarantees: Consistency (every read receives the most recent write), Availability (every request receives a response), and Partition tolerance (the system continues to operate despite network partitions). This fundamental theorem guides distributed system design choices."
  },
  {
    id: 5,
    topic: 'programming',
    difficulty: 'hard',
    question: "What is the difference between process and thread in concurrent programming?",
    options: [
      "Processes share memory space while threads don't",
      "Threads are slower but more secure than processes",
      "Processes have their own memory space while threads share memory within a process",
      "Threads can only be used in interpreted languages"
    ],
    correctAnswerIndex: 2,
    explanation: "A process is an independent execution unit with its own memory space, while threads are lighter execution units that share the memory space of their parent process. This shared memory makes thread communication more efficient but also introduces potential concurrency issues like race conditions."
  }
];

// Ethical AI & Data Privacy Questions
export const ethicsQuestions: Question[] = [
  {
    id: 1,
    topic: 'ethics',
    difficulty: 'easy',
    question: "What is algorithmic bias?",
    options: [
      "A technical error in algorithm implementation",
      "The tendency of algorithms to favor faster computational paths",
      "When algorithms systematically produce results that favor or discriminate against certain groups",
      "The preference for certain algorithms over others in the data science community"
    ],
    correctAnswerIndex: 2,
    explanation: "Algorithmic bias refers to systematic and repeatable errors in computational systems that create unfair or discriminatory outcomes for certain groups. This can happen due to biased training data, feature selection, or model design decisions."
  },
  {
    id: 2,
    topic: 'ethics',
    difficulty: 'medium',
    question: "What does the principle of 'data minimization' refer to in data privacy?",
    options: [
      "Using the smallest possible dataset for training models",
      "Collecting and processing only the data necessary for specified purposes",
      "Minimizing the number of features used in a model",
      "Reducing database storage requirements"
    ],
    correctAnswerIndex: 1,
    explanation: "Data minimization is a principle that organizations should collect and process only the personal data needed for specific, clearly defined purposes. This reduces privacy risks and compliance burdens while respecting individuals' rights."
  },
  {
    id: 3,
    topic: 'ethics',
    difficulty: 'medium',
    question: "What is differential privacy?",
    options: [
      "A technique to ensure different users see different content",
      "A mathematical framework that provides formal privacy guarantees while allowing useful data analysis",
      "The practice of using different privacy policies for different types of data",
      "A method to differentiate between public and private data"
    ],
    correctAnswerIndex: 1,
    explanation: "Differential privacy is a mathematical framework that adds carefully calibrated noise to data or analysis results so that it's impossible to confidently determine whether any individual's data was included in the dataset, while still allowing accurate aggregate analyses."
  },
  {
    id: 4,
    topic: 'ethics',
    difficulty: 'hard',
    question: "What ethical challenge is presented by the 'black box problem' in AI?",
    options: [
      "The environmental impact of large AI models",
      "The difficulty in understanding and explaining how complex AI models make decisions",
      "The security vulnerabilities in AI deployment",
      "The challenge of storing large AI models"
    ],
    correctAnswerIndex: 1,
    explanation: "The 'black box problem' refers to the difficulty in understanding how complex AI models (especially deep learning) reach their decisions. This lack of explainability raises ethical concerns about accountability, trust, bias detection, and the ability to contest AI-based decisions."
  },
  {
    id: 5,
    topic: 'ethics',
    difficulty: 'hard',
    question: "What is 'model stealing' in the context of AI ethics?",
    options: [
      "When a model is downloaded without permission",
      "When an attacker creates a replica of a model by querying it and using the responses to train their own model",
      "When a model's source code is copied",
      "When a model produces incorrect results"
    ],
    correctAnswerIndex: 1,
    explanation: "Model stealing (or model extraction) is an attack where an adversary repeatedly queries a target ML model, observes the outputs, and uses these input-output pairs to train a 'replica' model that functions similarly to the target. This can violate intellectual property rights and enable further attacks."
  }
];

// Add the new question sets to the allQuestions object
export const allQuestions: { [key: string]: Question[] } = {
  python: pythonQuestions,
  statistics: statisticsQuestions,
  data_science: dataScienceQuestions,
  machine_learning: machineLearningQuestions,
  sql: sqlQuestions,
  mathematics: mathematicsQuestions,
  programming: programmingQuestions,
  ethics: ethicsQuestions
};

// Update the topic names map to include the new topics
export const topicNames: { [key: string]: string } = {
  python: "Python",
  statistics: "Statistics",
  data_science: "Data Science",
  machine_learning: "Machine Learning",
  sql: "SQL",
  mathematics: "Mathematics",
  programming: "Programming & Software Development",
  ethics: "Ethical AI & Data Privacy"
};
