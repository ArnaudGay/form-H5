-- Migration pour ajouter les champs acceptContact et email à la table submissions
-- Exécutez ce script dans l'éditeur SQL de Supabase

-- Ajouter les colonnes acceptContact et email à la table submissions
ALTER TABLE submissions 
ADD COLUMN IF NOT EXISTS accept_contact BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS email TEXT;

-- Créer un index sur email pour faciliter les recherches (optionnel)
CREATE INDEX IF NOT EXISTS idx_submissions_email ON submissions(email) WHERE email IS NOT NULL;

-- Créer un index sur accept_contact pour faciliter les requêtes
CREATE INDEX IF NOT EXISTS idx_submissions_accept_contact ON submissions(accept_contact);

-- Commentaire sur les colonnes
COMMENT ON COLUMN submissions.accept_contact IS 'Indique si l''utilisateur a accepté d''être recontacté';
COMMENT ON COLUMN submissions.email IS 'Adresse e-mail de l''utilisateur (si accept_contact est true)';



