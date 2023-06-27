export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Cart: {
        Row: {
          created_at: string | null
          how_many: number | null
          id: number
          product: string | null
          user: string | null
        }
        Insert: {
          created_at?: string | null
          how_many?: number | null
          id?: number
          product?: string | null
          user?: string | null
        }
        Update: {
          created_at?: string | null
          how_many?: number | null
          id?: number
          product?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Cart_user_fkey"
            columns: ["user"]
            referencedRelation: "USER"
            referencedColumns: ["id"]
          }
        ]
      }
      Order: {
        Row: {
          cancel: boolean | null
          created_at: string | null
          id: string
          product: string | null
          user: string | null
        }
        Insert: {
          cancel?: boolean | null
          created_at?: string | null
          id?: string
          product?: string | null
          user?: string | null
        }
        Update: {
          cancel?: boolean | null
          created_at?: string | null
          id?: string
          product?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Order_user_fkey"
            columns: ["user"]
            referencedRelation: "USER"
            referencedColumns: ["id"]
          }
        ]
      }
      USER: {
        Row: {
          address: string | null
          created_at: string | null
          id: string
          user: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          id: string
          user?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          id?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "USER_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
