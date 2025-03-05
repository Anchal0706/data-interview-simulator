
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, X, Circle, CircleCheck } from 'lucide-react';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  displayNumber?: number; // Optional display number for sequential numbering
}

interface TestQuestionProps {
  question: Question;
  onAnswerSubmit: (id: number, answerIndex: number) => void;
  userAnswerIndex?: number;
  feedback?: {
    isCorrect: boolean;
    correctAnswerIndex: number;
    explanation: string;
  };
  showFeedback?: boolean;
  className?: string;
}

export function TestQuestion({ 
  question, 
  onAnswerSubmit, 
  userAnswerIndex,
  feedback,
  showFeedback = false,
  className 
}: TestQuestionProps) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | undefined>(userAnswerIndex);
  const [isSubmitted, setIsSubmitted] = useState(userAnswerIndex !== undefined);

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOptionIndex(index);
  };

  const handleSubmit = () => {
    if (selectedOptionIndex === undefined) return;
    
    onAnswerSubmit(question.id, selectedOptionIndex);
    setIsSubmitted(true);
  };

  // Use displayNumber if available, otherwise use id
  const displayNumber = question.displayNumber !== undefined ? question.displayNumber : question.id;

  return (
    <div className={cn(
      "bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-border/60 transition-all",
      className
    )}>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div>
            <h3 className="text-lg font-medium">Question {displayNumber}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={cn(
                "inline-flex px-2 py-1 text-xs font-medium rounded-full",
                question.difficulty === 'easy' ? "bg-green-100 text-green-800" :
                question.difficulty === 'medium' ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
              </span>
            </div>
          </div>
          
          {showFeedback && feedback && (
            <div className={cn(
              "flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium",
              feedback.isCorrect 
                ? "bg-green-50 text-green-600" 
                : "bg-red-50 text-red-600"
            )}>
              {feedback.isCorrect ? (
                <Check className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4" />
              )}
              {feedback.isCorrect ? 'Correct' : 'Incorrect'}
            </div>
          )}
        </div>
        
        <p className="text-foreground whitespace-pre-wrap">{question.question}</p>
        
        <div className="space-y-3 mt-4">
          {question.options.map((option, index) => (
            <div 
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={cn(
                "flex items-start p-3 border rounded-lg cursor-pointer transition-all",
                selectedOptionIndex === index && !showFeedback && "border-primary bg-primary/5",
                showFeedback && feedback && (
                  index === feedback.correctAnswerIndex 
                    ? "border-green-500 bg-green-50" 
                    : index === userAnswerIndex && index !== feedback.correctAnswerIndex 
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200"
                ),
                !isSubmitted && "hover:border-primary hover:bg-primary/5"
              )}
            >
              <div className="h-5 w-5 flex-shrink-0 mt-0.5 mr-3">
                {showFeedback && feedback ? (
                  index === feedback.correctAnswerIndex ? (
                    <CircleCheck className="h-5 w-5 text-green-500" />
                  ) : index === userAnswerIndex && index !== feedback.correctAnswerIndex ? (
                    <X className="h-5 w-5 text-red-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-300" />
                  )
                ) : (
                  <div className={cn(
                    "h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center",
                    selectedOptionIndex === index && "border-primary bg-primary text-white"
                  )}>
                    {selectedOptionIndex === index && <Check className="h-3 w-3" />}
                  </div>
                )}
              </div>
              <span className="text-sm">{option}</span>
            </div>
          ))}
          
          {!isSubmitted && (
            <button 
              onClick={handleSubmit}
              className="primary-button mt-4 w-full"
              disabled={selectedOptionIndex === undefined}
            >
              Submit Answer
            </button>
          )}
        </div>
        
        {showFeedback && feedback && (
          <div className={cn(
            "mt-4 p-4 rounded-lg border animate-fade-in",
            feedback.isCorrect 
              ? "bg-green-50 border-green-100" 
              : "bg-red-50 border-red-100"
          )}>
            <h4 className={cn(
              "font-medium mb-1",
              feedback.isCorrect ? "text-green-700" : "text-red-700"
            )}>
              {feedback.isCorrect ? "Great job!" : "Explanation:"}
            </h4>
            <p className={cn(
              "text-sm",
              feedback.isCorrect ? "text-green-600" : "text-red-600"
            )}>
              {feedback.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
