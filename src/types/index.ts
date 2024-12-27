export interface User {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
}

export interface Hotel {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  hotel_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  is_primary: boolean;
  created_at: string;
  updated_at: string;
}

export interface VirtualCard {
  id: string;
  hotel_id: string;
  guest_name: string;
  check_in_date: string;
  check_out_date: string;
  remaining_balance: number;
  currency: string;
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  source: string;
  created_at: string;
  updated_at: string;
}