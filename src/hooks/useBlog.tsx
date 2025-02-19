import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IBlog } from "../types";
import { db } from "../services/firestore/app";

const useBlog = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlog = async () => {
    try {
      
      const querySnapshot = await getDocs(collection(db, "blogs"));

      setBlogs(
        querySnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as IBlog)
        )
      );

    } catch (error) {

      console.error("Error fetching blogs: ", error);

      setError("Error al obtener los blogs");

    } finally {

      setLoading(false);
    
    }

  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return { blogs, loading, error };
}

export default useBlog;