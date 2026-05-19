/*
  # Create audit_submissions table

  1. New Tables
    - `audit_submissions`
      - `id` (uuid, primary key)
      - `first_name` (text, not null)
      - `last_name` (text, not null)
      - `email` (text, not null)
      - `company` (text, not null)
      - `team_size` (text, not null)
      - `challenge` (text, nullable)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `audit_submissions` table
    - Add policy for authenticated inserts only (via edge function service role)
    - No direct public read/write access
*/

CREATE TABLE IF NOT EXISTS audit_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  team_size text NOT NULL,
  challenge text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE audit_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert submissions"
  ON audit_submissions FOR INSERT
  TO authenticated
  WITH CHECK (true);
