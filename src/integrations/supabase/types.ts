export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      deployments: {
        Row: {
          created_at: string | null
          deployment_url: string
          id: string
          status: string | null
          store_id: string | null
        }
        Insert: {
          created_at?: string | null
          deployment_url: string
          id?: string
          status?: string | null
          store_id?: string | null
        }
        Update: {
          created_at?: string | null
          deployment_url?: string
          id?: string
          status?: string | null
          store_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deployments_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          customer_address: Json | null
          customer_email: string
          customer_name: string
          customer_phone: string | null
          id: string
          items: Json
          notes: string | null
          order_number: string
          payment_id: string | null
          payment_status: string | null
          shipping_amount: number | null
          status: string | null
          store_id: string
          subtotal: number
          tax_amount: number | null
          total_amount: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_address?: Json | null
          customer_email: string
          customer_name: string
          customer_phone?: string | null
          id?: string
          items: Json
          notes?: string | null
          order_number: string
          payment_id?: string | null
          payment_status?: string | null
          shipping_amount?: number | null
          status?: string | null
          store_id: string
          subtotal: number
          tax_amount?: number | null
          total_amount: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_address?: Json | null
          customer_email?: string
          customer_name?: string
          customer_phone?: string | null
          id?: string
          items?: Json
          notes?: string | null
          order_number?: string
          payment_id?: string | null
          payment_status?: string | null
          shipping_amount?: number | null
          status?: string | null
          store_id?: string
          subtotal?: number
          tax_amount?: number | null
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string | null
          compare_at_price: number | null
          created_at: string
          description: string | null
          dimensions: Json | null
          id: string
          images: string[] | null
          inventory_quantity: number | null
          name: string
          price: number
          seo_description: string | null
          seo_title: string | null
          sku: string | null
          status: string | null
          store_id: string
          tags: string[] | null
          track_inventory: boolean | null
          updated_at: string
          weight: number | null
        }
        Insert: {
          category?: string | null
          compare_at_price?: number | null
          created_at?: string
          description?: string | null
          dimensions?: Json | null
          id?: string
          images?: string[] | null
          inventory_quantity?: number | null
          name: string
          price: number
          seo_description?: string | null
          seo_title?: string | null
          sku?: string | null
          status?: string | null
          store_id: string
          tags?: string[] | null
          track_inventory?: boolean | null
          updated_at?: string
          weight?: number | null
        }
        Update: {
          category?: string | null
          compare_at_price?: number | null
          created_at?: string
          description?: string | null
          dimensions?: Json | null
          id?: string
          images?: string[] | null
          inventory_quantity?: number | null
          name?: string
          price?: number
          seo_description?: string | null
          seo_title?: string | null
          sku?: string | null
          status?: string | null
          store_id?: string
          tags?: string[] | null
          track_inventory?: boolean | null
          updated_at?: string
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          role: string | null
          subscription_active: boolean | null
          subscription_tier: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id?: string
          role?: string | null
          subscription_active?: boolean | null
          subscription_tier?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          role?: string | null
          subscription_active?: boolean | null
          subscription_tier?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      store_assets: {
        Row: {
          created_at: string | null
          file_name: string
          file_path: string
          file_size: number | null
          file_type: string
          id: string
          store_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          file_type: string
          id?: string
          store_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          file_type?: string
          id?: string
          store_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "store_assets_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      store_settings: {
        Row: {
          analytics_id: string | null
          created_at: string
          currency: string | null
          custom_css: string | null
          free_shipping_threshold: number | null
          id: string
          razorpay_key_id: string | null
          razorpay_key_secret: string | null
          shipping_rate: number | null
          store_id: string
          tax_rate: number | null
          updated_at: string
          whatsapp_enabled: boolean | null
          whatsapp_message: string | null
          whatsapp_number: string | null
        }
        Insert: {
          analytics_id?: string | null
          created_at?: string
          currency?: string | null
          custom_css?: string | null
          free_shipping_threshold?: number | null
          id?: string
          razorpay_key_id?: string | null
          razorpay_key_secret?: string | null
          shipping_rate?: number | null
          store_id: string
          tax_rate?: number | null
          updated_at?: string
          whatsapp_enabled?: boolean | null
          whatsapp_message?: string | null
          whatsapp_number?: string | null
        }
        Update: {
          analytics_id?: string | null
          created_at?: string
          currency?: string | null
          custom_css?: string | null
          free_shipping_threshold?: number | null
          id?: string
          razorpay_key_id?: string | null
          razorpay_key_secret?: string | null
          shipping_rate?: number | null
          store_id?: string
          tax_rate?: number | null
          updated_at?: string
          whatsapp_enabled?: boolean | null
          whatsapp_message?: string | null
          whatsapp_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "store_settings_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: true
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      store_templates: {
        Row: {
          category: string
          configuration: Json | null
          created_at: string | null
          description: string | null
          id: number
          image_url: string | null
          is_premium: boolean | null
          name: string
        }
        Insert: {
          category: string
          configuration?: Json | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          is_premium?: boolean | null
          name: string
        }
        Update: {
          category?: string
          configuration?: Json | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          is_premium?: boolean | null
          name?: string
        }
        Relationships: []
      }
      stores: {
        Row: {
          configuration: Json | null
          content: Json | null
          created_at: string | null
          custom_domain: string | null
          id: string
          is_published: boolean | null
          name: string
          subdomain: string | null
          template_id: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          configuration?: Json | null
          content?: Json | null
          created_at?: string | null
          custom_domain?: string | null
          id?: string
          is_published?: boolean | null
          name: string
          subdomain?: string | null
          template_id?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          configuration?: Json | null
          content?: Json | null
          created_at?: string | null
          custom_domain?: string | null
          id?: string
          is_published?: boolean | null
          name?: string
          subdomain?: string | null
          template_id?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
