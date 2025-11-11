import { supabase } from '../lib/supabase';

export interface DemographicsData {
  age: string;
  education: string;
  region: string;
}

export interface AnswerData {
  subjectId: number;
  importance: string | null;
  satisfaction: string | null;
}

export interface SubmissionData {
  demographics: DemographicsData;
  answers: AnswerData[];
  submittedAt: string;
}

/**
 * Envoie les données du questionnaire à Supabase
 */
export async function submitQuestionnaireData(data: SubmissionData): Promise<{ success: boolean; error?: string }> {
  try {
    // Insérer les données dans la table 'submissions'
    const { error } = await supabase
      .from('submissions')
      .insert([
        {
          demographics: data.demographics,
          answers: data.answers,
          submitted_at: data.submittedAt,
        },
      ]);

    if (error) {
      console.error('Error submitting data:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Une erreur inattendue s\'est produite' 
    };
  }
}

