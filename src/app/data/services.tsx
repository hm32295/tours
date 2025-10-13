import {
  Plane,
  Hotel,
  Globe,
  FileBadge,
  Umbrella,
  Car,
  Ship,
  Calendar,
  Users,
  CreditCard,
  Camera,
  MapPin,
  Gift,
  Headphones,
  Building2,
} from "lucide-react";

export interface Service {
  id: number;
  icon: React.ElementType;
  titleKey: string;
  descKey: string;
}

export const services: Service[] = [
  { id: 1, icon: Plane, titleKey: "services_.flight.title", descKey: "services_.flight.desc" },
  { id: 2, icon: Hotel, titleKey: "services_.hotel.title", descKey: "services_.hotel.desc" },
  { id: 3, icon: Globe, titleKey: "services_.tour.title", descKey: "services_.tour.desc" },
  { id: 4, icon: FileBadge, titleKey: "services_.visa.title", descKey: "services_.visa.desc" },
  { id: 5, icon: Umbrella, titleKey: "services_.vacation.title", descKey: "services_.vacation.desc" },
  { id: 6, icon: Car, titleKey: "services_.transport.title", descKey: "services_.transport.desc" },
  { id: 7, icon: Ship, titleKey: "services_.cruise.title", descKey: "services_.cruise.desc" },
  { id: 8, icon: Calendar, titleKey: "services_.events.title", descKey: "services_.events.desc" },
  { id: 9, icon: Users, titleKey: "services_.group.title", descKey: "services_.group.desc" },
  { id: 10, icon: CreditCard, titleKey: "services_.payment.title", descKey: "services_.payment.desc" },
  { id: 11, icon: Camera, titleKey: "services_.photography.title", descKey: "services_.photography.desc" },
  { id: 12, icon: MapPin, titleKey: "services_.guide.title", descKey: "services_.guide.desc" },
  { id: 13, icon: Gift, titleKey: "services_.offers.title", descKey: "services_.offers.desc" },
  { id: 14, icon: Headphones, titleKey: "services_.support.title", descKey: "services_.support.desc" },
  { id: 15, icon: Building2, titleKey: "services_.corporate.title", descKey: "services_.corporate.desc" },
];
