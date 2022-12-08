import iconListDefault from "../assets/-tabbar-iconListDefault.svg";
import iconListSelected from "../assets/-tabbar-iconListSelected.svg";
import iconMapDefault from "../assets/-tabbar-iconMapDefault.svg";
import iconMapSelected from "../assets/-tabbar-iconMapSelected.svg";
import iconCalenderDefault from "../assets/-tabbar-iconCalenderDefault.svg";
import iconCalenderSelected from "../assets/-tabbar-iconCalenderSelected.svg";

export const TAB_BAR_MANAGER = [
  {
    name: "ToDo",
    id: "todo",
    path: "/"
  },
  {
    name: "Active Cases",
    id: "cases",
    path: "/cases"
  },
];

export const TAB_BAR_INSPECTOR = [
  {
    name: "ToDo",
    id: "list",
    path: "/",
    default: iconListDefault,
    selected: iconListSelected,
  },
  {
    name: "Calendar",
    id: "calendar",
    path: "/calendar",
    default: iconCalenderDefault,
    selected: iconCalenderSelected,
  },
  {
    name: "Map",
    id: "map",
    path: "/map",
    default: iconMapDefault,
    selected: iconMapSelected,
  },
];

export const TAB_BAR_CASE = [
  {
    name: "General",
    id: "general",
    path: ""
  },
  {
    name: "Details",
    id: "details",
    path: "details"
  },
  {
    name: "Photos",
    id: "photos",
    path: "photos"
  },
];

export const TYPE_OF_PROPERTIES = [
  {
    id: 1, 
    name: "Appartment"
  },
  {
    id: 2, 
    name: "House"
  },
  {
    id: 3, 
    name: "Basement"
  },
  {
    id: 4, 
    name: "Room"
  },
  {
    id: 5, 
    name: "Attic"
  },
  {
    id: 6, 
    name: "Backyard"
  },
]

export const FLOOR = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
  { name: "5", value: 5 },
  { name: "6", value: 6 },
]

export const NUMBER_OF_ROOMS = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
  { name: "5", value: 5 },
  { name: "6", value: 6 },
];