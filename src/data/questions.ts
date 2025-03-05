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
  },
  {
    id: 6,
    topic: 'python',
    difficulty: 'easy',
    question: "What is the purpose of the 'self' parameter in Python class methods?",
    options: [
      "It's a keyword that defines private methods",
      "It references the instance of the class itself",
      "It creates a new instance of the class",
      "It's used to access static methods only"
    ],
    correctAnswerIndex: 1,
    explanation: "In Python, 'self' is a convention (not a keyword) that refers to the instance of the class. It's the first parameter of instance methods and allows you to access instance attributes and methods."
  },
  {
    id: 7,
    topic: 'python',
    difficulty: 'medium',
    question: "What does a list comprehension do in Python?",
    options: [
      "Creates a deep copy of a list",
      "Provides a concise way to create lists based on existing iterables",
      "Sorts a list in ascending order",
      "Removes duplicate elements from a list"
    ],
    correctAnswerIndex: 1,
    explanation: "List comprehensions offer a shorter syntax to create a new list based on values of an existing iterable. The syntax [expression for item in iterable if condition] allows filtering and transforming elements in a single line."
  },
  {
    id: 8,
    topic: 'python',
    difficulty: 'hard',
    question: "What is a Python generator and what's the advantage of using one?",
    options: [
      "A tool for creating random numbers with better performance than random()",
      "A class for generating new Python objects at runtime",
      "A function that returns an iterator that yields items instead of returning a single value",
      "A built-in utility for spawning multiple processes"
    ],
    correctAnswerIndex: 2,
    explanation: "A Python generator is a function that uses 'yield' to return an iterator that produces a sequence of values when iterated over. Generators are memory efficient because they generate items one at a time and only when needed, rather than storing the entire sequence in memory."
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
  },
  {
    id: 6,
    topic: 'statistics',
    difficulty: 'easy',
    question: "What is the difference between correlation and causation?",
    options: [
      "They are different terms for the same statistical relationship",
      "Correlation means one variable causes the other, while causation is a weaker relationship",
      "Correlation shows a statistical relationship between variables, but doesn't imply one causes the other",
      "Causation can exist without correlation"
    ],
    correctAnswerIndex: 2,
    explanation: "Correlation indicates that two variables have a statistical relationship or pattern, but correlation does not imply causation. Just because two variables move together doesn't mean one causes the other - they could both be affected by a third variable or their relationship could be coincidental."
  },
  {
    id: 7,
    topic: 'statistics',
    difficulty: 'medium',
    question: "What is the purpose of bootstrapping in statistics?",
    options: [
      "To initialize random variables at the start of a simulation",
      "To estimate the distribution of a statistic by resampling with replacement",
      "To transform non-normal data into normal distributions",
      "To enhance processing speed for large datasets"
    ],
    correctAnswerIndex: 1,
    explanation: "Bootstrapping is a resampling technique that involves repeatedly sampling with replacement from the observed data to estimate the sampling distribution of a statistic. This approach allows estimation of standard errors and confidence intervals without assuming a specific distribution."
  },
  {
    id: 8,
    topic: 'statistics',
    difficulty: 'hard',
    question: "What is the purpose of regularization in statistical modeling?",
    options: [
      "To simplify the mathematical complexity of statistical computations",
      "To add constraints to a model to reduce overfitting",
      "To smooth data points to remove outliers",
      "To standardize variable scales across different models"
    ],
    correctAnswerIndex: 1,
    explanation: "Regularization adds a penalty term to the loss function during model training, discouraging complex models and helping prevent overfitting. Common techniques include L1 (Lasso) and L2 (Ridge) regularization, which add penalties based on coefficient magnitude."
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
  },
  {
    id: 6,
    topic: 'data_science',
    difficulty: 'easy',
    question: "What is feature engineering in data science?",
    options: [
      "The process of building new ML models using existing features",
      "The process of creating new features from existing data to improve model performance",
      "Engineering software solutions for data science problems",
      "The technical process of deploying machine learning models"
    ],
    correctAnswerIndex: 1,
    explanation: "Feature engineering is the process of selecting, transforming, or creating new features from raw data to improve the performance of machine learning models. Good feature engineering can significantly enhance model accuracy and is often more important than the choice of algorithm."
  },
  {
    id: 7,
    topic: 'data_science',
    difficulty: 'medium',
    question: "What is the difference between supervised and unsupervised learning?",
    options: [
      "Supervised learning requires human supervision, unsupervised is fully automated",
      "Supervised learning works with labeled data, while unsupervised learning works with unlabeled data",
      "Supervised learning is for regression, unsupervised is for classification",
      "Supervised learning uses decision trees, unsupervised uses neural networks"
    ],
    correctAnswerIndex: 1,
    explanation: "In supervised learning, algorithms learn from labeled data with input-output pairs to make predictions or classifications. In unsupervised learning, algorithms work with unlabeled data to identify patterns, relationships, or structures within the data, such as clustering or dimensionality reduction."
  },
  {
    id: 8,
    topic: 'data_science',
    difficulty: 'hard',
    question: "What is a Receiver Operating Characteristic (ROC) curve used for?",
    options: [
      "To visualize hardware performance of data science systems",
      "To evaluate and compare classification models based on their true positive and false positive rates",
      "To display the relationship between features in a dataset",
      "To show how quickly a neural network converges during training"
    ],
    correctAnswerIndex: 1,
    explanation: "An ROC curve plots the true positive rate (sensitivity) against the false positive rate (1 - specificity) at various threshold settings. The area under the ROC curve (AUC) is a common metric for evaluating binary classification models - a higher AUC indicates better model performance."
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
  },
  {
    id: 6,
    topic: 'machine_learning',
    difficulty: 'easy',
    question: "What is the purpose of a confusion matrix in evaluating classification models?",
    options: [
      "To confuse hackers trying to steal the model",
      "To visualize the learning rate schedule",
      "To show the distribution of predicted classes vs. actual classes",
      "To measure the computational complexity of the algorithm"
    ],
    correctAnswerIndex: 2,
    explanation: "A confusion matrix is a table that visualizes the performance of a classification model by showing the counts of true positives, false positives, true negatives, and false negatives. It helps identify which classes the model is confusing with each other and calculate metrics like accuracy, precision, recall, and F1-score."
  },
  {
    id: 7,
    topic: 'machine_learning',
    difficulty: 'medium',
    question: "What is the purpose of dropout in neural networks?",
    options: [
      "To completely remove neurons that aren't learning effectively",
      "To randomly deactivate neurons during training to prevent overfitting",
      "To drop out of training early when validation loss increases",
      "To remove input features that don't contribute significantly"
    ],
    correctAnswerIndex: 1,
    explanation: "Dropout is a regularization technique where randomly selected neurons are ignored (dropped out) during training. This prevents units from co-adapting too much and forces the network to learn more robust features, reducing overfitting and improving generalization."
  },
  {
    id: 8,
    topic: 'machine_learning',
    difficulty: 'hard',
    question: "What is the 'cold start problem' in recommendation systems?",
    options: [
      "When a model takes too long to initialize",
      "The difficulty of making recommendations for new users or items with little or no history",
      "Poor performance when the system is first deployed",
      "When recommendations become outdated over time"
    ],
    correctAnswerIndex: 1,
    explanation: "The cold start problem occurs when a recommendation system cannot draw inferences for users or items with insufficient data (new users or items). Solutions include content-based filtering, requesting initial preferences, using demographic information, or hybrid approaches combining multiple techniques."
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
  },
  {
    id: 6,
    topic: 'sql',
    difficulty: 'easy',
    question: "What is the difference between DELETE and TRUNCATE commands in SQL?",
    options: [
      "They are identical in function",
      "DELETE removes specified rows while TRUNCATE removes all rows but keeps the table structure",
      "TRUNCATE is used for views while DELETE is used for tables",
      "DELETE is faster than TRUNCATE for large tables"
    ],
    correctAnswerIndex: 1,
    explanation: "DELETE is a DML command that removes specified rows and can be used with a WHERE clause. TRUNCATE is a DDL command that removes all rows, resets identity counters, and is generally faster because it doesn't log individual row deletions. DELETE can be rolled back in a transaction while TRUNCATE typically cannot."
  },
  {
    id: 7,
    topic: 'sql',
    difficulty: 'medium',
    question: "What is the purpose of window functions in SQL?",
    options: [
      "To operate on database views rather than tables",
      "To create pop-up windows in database GUIs",
      "To perform calculations across a set of rows related to the current row",
      "To increase query execution speed"
    ],
    correctAnswerIndex: 2,
    explanation: "Window functions perform calculations across a set of table rows related to the current row. They're similar to aggregate functions but don't cause rows to become grouped into a single output row - each row retains its separate identity. Examples include RANK(), LEAD(), LAG(), and moving averages."
  },
  {
    id: 8,
    topic: 'sql',
    difficulty: 'hard',
    question: "What is a materialized view in SQL and when would you use it?",
    options: [
      "A view that shows only material data (numbers and text) instead of binary data",
      "A physical copy of the data resulting from a view's query, stored for faster access",
      "A special view for data related to manufacturing materials",
      "A view that cannot be modified after creation"
    ],
    correctAnswerIndex: 1,
    explanation: "A materialized view is a database object that contains the results of a query physically stored as a table. Unlike regular views that run their defining query each time they're accessed, materialized views cache the results, making them ideal for complex queries that are expensive to compute but don't need real-time data."
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
  },
  {
    id: 6,
    topic: 'mathematics',
    difficulty: 'easy',
    question: "What is a covariance matrix used for?",
    options: [
      "To store only the variance of each variable",
      "To summarize the variances and correlations between multiple variables",
      "To perform matrix multiplication more efficiently",
      "To compute determinants only"
    ],
    correctAnswerIndex: 1,
    explanation: "A covariance matrix is a square matrix that shows the covariance between different variables in a dataset. The diagonal elements represent the variances of individual variables, while off-diagonal elements represent the covariance between pairs of variables. It's crucial for understanding multivariate relationships and is used in techniques like PCA and multivariate Gaussian distributions."
  },
  {
    id: 7,
    topic: 'mathematics',
    difficulty: 'medium',
    question: "What is gradient descent conceptually trying to do?",
    options: [
      "Find the global maximum of a function",
      "Find the nearest local minimum of a function by taking steps proportional to the negative of the gradient",
      "Calculate the exact roots of polynomial equations",
      "Convert non-linear functions to linear approximations"
    ],
    correctAnswerIndex: 1,
    explanation: "Gradient descent is an optimization algorithm that iteratively moves toward the minimum of a function by taking steps proportional to the negative of the gradient (the steepest descent direction). It's widely used in machine learning to minimize loss functions by updating model parameters in the direction that reduces error."
  },
  {
    id: 8,
    topic: 'mathematics',
    difficulty: 'hard',
    question: "What is the relationship between eigenvalues, eigenvectors, and matrix diagonalization?",
    options: [
      "Eigenvalues and eigenvectors are unrelated to diagonalization",
      "A matrix can be diagonalized only if it has no eigenvalues",
      "A matrix can be diagonalized if and only if it has n linearly independent eigenvectors, where n is the matrix dimension",
      "Diagonalization requires calculating the determinant, but not eigenvalues"
    ],
    correctAnswerIndex: 2,
    explanation: "A square matrix A can be diagonalized if and only if it has n linearly independent eigenvectors (where n is the dimension of A). If P is the matrix whose columns are these eigenvectors, and D is the diagonal matrix of corresponding eigenvalues, then A = PDP^(-1). This decomposition is useful for computing powers of A, solving differential equations, and analyzing dynamical systems."
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
  },
  {
    id: 6,
    topic: 'programming',
    difficulty: 'easy',
    question: "What is the purpose of version control systems like Git?",
    options: [
      "To make backups of code in case of computer failure",
      "To restrict who can view and modify the code",
      "To track changes, manage different versions, and facilitate collaboration",
      "To automatically optimize code for faster execution"
    ],
    correctAnswerIndex: 2,
    explanation: "Version control systems like Git track changes to files over time, allowing developers to see history, revert to previous versions, work on different features simultaneously through branching, and collaborate without overwriting each other's work. They're essential for modern software development workflows and team collaboration."
  },
  {
    id: 7,
    topic: 'programming',
    difficulty: 'medium',
    question: "What is the time complexity of binary search?",
    options: [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    correctAnswerIndex: 1,
    explanation: "Binary search has a time complexity of O(log n) because with each comparison, it eliminates half of the remaining elements from consideration. This makes it significantly more efficient than linear search (O(n)) for large sorted arrays, as the logarithmic growth rate is much slower than linear growth."
  },
  {
    id: 8,
    topic: 'programming',
    difficulty: 'hard',
    question: "What is the eventual consistency model in distributed systems?",
    options: [
      "A model where all nodes in a distributed system see the same data immediately",
      "A consistency model guaranteeing that once no new updates are made to an object, all accesses will return the last updated value",
      "A model where data is eventually deleted to save storage space",
      "A system that prioritizes consistency over availability"
    ],
    correctAnswerIndex: 1,
    explanation: "Eventual consistency is a consistency model used in distributed systems that guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value. This model allows for better availability and partition tolerance in distributed systems, as described by the CAP theorem, but sacrifices immediate consistency."
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
  },
  {
    id: 6,
    topic: 'ethics',
    difficulty: 'easy',
    question: "What is 'data anonymization' and why is it important?",
    options: [
      "The process of encrypting data so only authorized users can read it",
      "The practice of modifying data so that individuals cannot be identified from it",
      "The deletion of unnecessary data to save storage space",
      "The concept of keeping data in secure offline storage"
    ],
    correctAnswerIndex: 1,
    explanation: "Data anonymization is the process of removing or modifying personally identifiable information (PII) from datasets so that individuals cannot be identified. This is crucial for protecting privacy while still allowing data analysis, and is often required by regulations like GDPR and HIPAA when working with sensitive information."
  },
  {
    id: 7,
    topic: 'ethics',
    difficulty: 'medium',
    question: "What is 'fairness' in the context of machine learning?",
    options: [
      "Ensuring that all users pay an equal price for using the ML system",
      "Guaranteeing that the model uses an equal number of features for each prediction",
      "Making sure that the model treats all individuals and groups in an unbiased manner",
      "Building models that produce the same output regardless of input"
    ],
    correctAnswerIndex: 2,
    explanation: "Fairness in machine learning refers to ensuring that models don't discriminate against or systematically disadvantage certain individuals or groups based on sensitive attributes like race, gender, age, etc. There are various mathematical definitions of fairness, including demographic parity, equal opportunity, and equalized odds, each addressing different aspects of algorithmic bias."
  },
  {
    id: 8,
    topic: 'ethics',
    difficulty: 'hard',
    question: "What is the 'right to be forgotten' in data privacy laws?",
    options: [
      "The right of companies to delete unprofitable customer data",
      "An individual's right to have their personal data erased from systems under certain conditions",
      "The legal requirement to forget about data breaches after a certain time period",
      "A conceptual right with no legal standing in any jurisdiction"
    ],
    correctAnswerIndex: 1,
    explanation: "The 'right to be forgotten' (or right to erasure) is a principle embodied in privacy regulations like GDPR that gives individuals the right to request deletion of their personal data under certain conditions. Organizations must comply by erasing the data and taking reasonable steps to inform other controllers processing that data. This right balances individual privacy against other rights like freedom of expression and scientific research."
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
