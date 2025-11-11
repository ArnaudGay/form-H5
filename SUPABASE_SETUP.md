# Configuration Supabase

Ce guide vous explique comment configurer Supabase pour récupérer les données du questionnaire.

## 1. Créer un projet Supabase

1. Allez sur [https://app.supabase.com](https://app.supabase.com)
2. Créez un nouveau projet ou utilisez un projet existant
3. Notez l'URL de votre projet et la clé API anonyme

## 2. Créer la table dans Supabase

Dans l'éditeur SQL de Supabase, exécutez cette requête pour créer la table `submissions` :

```sql
-- Créer la table submissions
CREATE TABLE submissions (
  id BIGSERIAL PRIMARY KEY,
  demographics JSONB NOT NULL,
  answers JSONB NOT NULL,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Créer un index sur submitted_at pour faciliter les requêtes
CREATE INDEX idx_submissions_submitted_at ON submissions(submitted_at);

-- Optionnel : Activer Row Level Security (RLS) si nécessaire
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Créer une politique pour permettre l'insertion (ajustez selon vos besoins)
CREATE POLICY "Allow anonymous inserts" ON submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

## 3. Configurer les variables d'environnement

1. Créez un fichier `.env` à la racine du projet
2. Ajoutez vos clés Supabase :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon
```

### Où trouver ces valeurs ?

1. Dans votre projet Supabase, allez dans **Settings** > **API**
2. **Project URL** = `VITE_SUPABASE_URL`
3. **anon/public key** = `VITE_SUPABASE_ANON_KEY`

## 4. Structure des données

Les données sont stockées dans la table `submissions` avec la structure suivante :

### Table: submissions

| Colonne | Type | Description |
|---------|------|-------------|
| id | BIGSERIAL | ID unique de la soumission |
| demographics | JSONB | Données démographiques (âge, éducation, région) |
| answers | JSONB | Tableau des réponses au questionnaire |
| submitted_at | TIMESTAMPTZ | Date et heure de soumission |
| created_at | TIMESTAMPTZ | Date de création de l'enregistrement |

### Format des données

**demographics:**
```json
{
  "age": "25-34 ans",
  "education": "Bac+5",
  "region": "Île-de-France"
}
```

**answers:**
```json
[
  {
    "subjectId": 1,
    "importance": "8",
    "satisfaction": "5"
  },
  {
    "subjectId": 2,
    "importance": "7",
    "satisfaction": "6"
  }
]
```

## 5. Vérifier que ça fonctionne

1. Redémarrez le serveur de développement après avoir créé le fichier `.env`
2. Complétez un questionnaire de test
3. Vérifiez dans Supabase > Table Editor > `submissions` que les données apparaissent

## 6. Récupérer les données

Vous pouvez récupérer les données via :

- **Table Editor** dans l'interface Supabase
- **SQL Editor** pour des requêtes personnalisées
- **API REST** : `GET /rest/v1/submissions`
- **Client JavaScript** dans votre code

### Exemple de requête SQL

```sql
-- Récupérer toutes les soumissions
SELECT * FROM submissions ORDER BY submitted_at DESC;

-- Compter les soumissions par région
SELECT 
  demographics->>'region' as region,
  COUNT(*) as count
FROM submissions
GROUP BY demographics->>'region'
ORDER BY count DESC;
```

## Sécurité

⚠️ **Important** : La clé `anon` est publique et visible dans le code client. Assurez-vous d'avoir configuré correctement les politiques RLS (Row Level Security) dans Supabase pour protéger vos données.

