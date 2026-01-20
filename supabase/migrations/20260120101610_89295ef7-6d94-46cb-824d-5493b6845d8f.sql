-- Add priority column to projects table
ALTER TABLE public.projects
ADD COLUMN priority text;