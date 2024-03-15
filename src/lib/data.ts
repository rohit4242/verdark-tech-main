export const blogPosts = [
    {
      id: 1,
      title: "Introduction to Next.js",
      content: "Next.js is a React framework that enables server-side rendering, static site generation, and more...",
      author: "John Doe",
      date: "2023-03-01",
    },
    {
      id: 2,
      title: "React Hooks Explained",
      content: "React Hooks are functions that allow you to use state and other React features without writing class components...",
      author: "Jane Smith",
      date: "2023-02-15",
    },
    {
      id: 3,
      title: "Building a Responsive Design with CSS",
      content: "Responsive design is a crucial aspect of modern web development, ensuring that your website looks great on various devices and screen sizes...",
      author: "Michael Johnson",
      date: "2023-01-20",
    },
  ];

  
  export interface BlogPost {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
  }