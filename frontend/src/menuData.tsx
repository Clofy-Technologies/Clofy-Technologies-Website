import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About Us",
    path: "/",
    newTab: false,
  },
  /*{
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },*/
  {
    id: 2,
    title: "Services",
    /*path: "/about",*/
    newTab: false,
    submenu: [
      {
        id: 44,
        title: "Microsoft 365 Advisory and Support ",
        path: "/services/s1",
        newTab: false,
      },
      {
        id: 43,
        title: "Cloud Migration Services",
        path: "/services/s2",
        newTab: false,
      },
      {
        id: 45,
        title: "Multi-Cloud Support",
        path: "/services/s3",
        newTab: false,
      },
      {
        id: 46,
        title: "SaaS End-to-End Services",
        path: "/services/s4",
        newTab: false,
      },
      {
        id: 47,
        title: "Cloud Cost Optimization Services",
        path: "/services/s5",
        newTab: false,
      },
      {
        id: 48,
        title: "Cloud and DevOps Implementation Services",
        path: "/services/s6",
        newTab: false,
      },
      {
        id: 49,
        title: "AI/ML-Driven Automation, Analytics, and Insights",
        path: "/services/s7",
        newTab: false,
      },
      {
        id: 50,
        title: "Low-Code/No-Code Development Services",
        path: "/services/s8",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Courses",
    newTab: false,
    submenu: [
      {
        id: 48,
        title: "Cloud Computing 5-Week Intensive Master Class",
        path: "/courses/c1",
        newTab: false,
      },
      {
        id: 49,
        title: "AWS Cloud Engineer Master Class",
        path: "/courses/c2",
        newTab: false,
      },
      {
        id: 50,
        title: "Azure Cloud Engineer Master Class",
        path: "/courses/c3",
        newTab: false,
      },
      {
        id: 51,
        title: "DevOps Engineer Master Class",
        path: "/courses/c4",
        newTab: false,
      },
      {
        id: 52,
        title: "Full Stack Development Bootcamp",
        path: "/courses/c5",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "Learning   Hub",
    newTab: false,
    submenu: [
      {
        id: 44,
        title: "NextGen Cloud Pro",
        path: "/blog-sidebar",
        newTab: false,
      },
      /*{
        id: 43,
        title: "Our Blog",
        path: "/blog",
        newTab: false,
      },*/
    ],
  },
  {
    id: 46,
    title: "Careers",
    path: "/careers",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  /*
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
    ],
  },*/
];
export default menuData;
