
export interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  explanation: string;
}

export const mockTestQuestions: Question[] = [
  {
    id: 1,
    question: "What is the difference between bias and variance in machine learning?",
    correctAnswer: "Bias is error due to overly simplistic assumptions in the learning algorithm, leading to underfitting. Variance is error due to too much complexity in the learning algorithm, leading to overfitting.",
    explanation: "High bias models pay little attention to the training data and oversimplify the model, resulting in high error on both training and test data. High variance models pay too much attention to the training data and don't generalize well to unseen data."
  },
  {
    id: 2,
    question: "Explain the Central Limit Theorem and its importance in data science.",
    correctAnswer: "The Central Limit Theorem states that the sampling distribution of the mean approaches a normal distribution as the sample size increases, regardless of the population's distribution. This is important because it allows us to make inferences about populations using sample statistics.",
    explanation: "The Central Limit Theorem is fundamental to statistical inference. It enables us to use normal distribution properties for hypothesis testing and constructing confidence intervals, even when working with non-normally distributed data."
  },
  {
    id: 3,
    question: "What is the curse of dimensionality and how does it affect machine learning models?",
    correctAnswer: "The curse of dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces that do not occur in low-dimensional settings. As dimensionality increases, the volume of the space increases exponentially, and the available data becomes sparse.",
    explanation: "This sparsity is problematic for any method that requires statistical significance. In machine learning, it can lead to overfitting, increased computational complexity, and difficulty in visualization. Techniques like dimensionality reduction help address these challenges."
  },
  {
    id: 4,
    question: "Describe the difference between supervised and unsupervised learning with examples.",
    correctAnswer: "Supervised learning uses labeled data to train models that can predict outcomes for new data. Examples include classification and regression. Unsupervised learning identifies patterns in unlabeled data through techniques like clustering and dimensionality reduction.",
    explanation: "Supervised learning examples include predicting house prices (regression) or spam detection (classification). Unsupervised learning examples include customer segmentation (clustering) or principal component analysis (dimensionality reduction)."
  },
  {
    id: 5,
    question: "What is regularization in machine learning and why is it important?",
    correctAnswer: "Regularization is a technique used to prevent overfitting by adding a penalty term to the loss function that discourages complex models. Common methods include L1 (Lasso) and L2 (Ridge) regularization.",
    explanation: "Regularization helps create models that generalize better to unseen data by constraining model parameters. L1 regularization can lead to sparse models (feature selection) while L2 regularization prevents any feature from having a disproportionately large impact."
  }
];
