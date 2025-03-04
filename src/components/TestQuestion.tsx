
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Check, X } from 'lucide-react';

export interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  explanation: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface TestQuestionProps {
  question: Question;
  onAnswerSubmit: (id: number, answer: string) => void;
  userAnswer?: string;
  feedback?: {
    isCorrect: boolean;
    correctAnswer: string;
    explanation: string;
  };
  showFeedback?: boolean;
  className?: string;
}

export function TestQuestion({ 
  question, 
  onAnswerSubmit, 
  userAnswer,
  feedback,
  showFeedback = false,
  className 
}: TestQuestionProps) {
  const [answer, setAnswer] = useState(userAnswer || '');
  const [isSubmitted, setIsSubmitted] = useState(!!userAnswer);

  const handleSubmit = () => {
    if (!answer.trim()) return;
    onAnswerSubmit(question.id, answer);
    setIsSubmitted(true);
  };

  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-sm border border-border/60 transition-all",
      className
    )}>
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium">Question {question.id}</h3>
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
        
        <p className="text-foreground">{question.question}</p>
        
        <div className="space-y-2">
          <Textarea 
            placeholder="Type your answer here..." 
            className="min-h-[100px] resize-none"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={isSubmitted}
          />
          
          {!isSubmitted && (
            <button 
              onClick={handleSubmit}
              className="primary-button mt-2"
              disabled={!answer.trim()}
            >
              Submit Answer
            </button>
          )}
        </div>
        
        {showFeedback && feedback && !feedback.isCorrect && (
          <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-100 animate-fade-in">
            <h4 className="font-medium text-red-700 mb-1">Correct Answer:</h4>
            <p className="text-red-600">{feedback.correctAnswer}</p>
            
            <h4 className="font-medium text-red-700 mt-3 mb-1">Explanation:</h4>
            <p className="text-red-600">{feedback.explanation}</p>
          </div>
        )}
        
        {showFeedback && feedback && feedback.isCorrect && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100 animate-fade-in">
            <h4 className="font-medium text-green-700 mb-1">Great job!</h4>
            <p className="text-green-600">{feedback.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
