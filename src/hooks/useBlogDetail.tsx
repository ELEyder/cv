import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IBlog } from "../types";
import { db } from "../services/firestore/app";

const useBlogDetail = ( id? : string) => {

  const [blog, setBlog] = useState<IBlog>({
    id: "",
    title: "",
    content: "",
    type: "generic",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlog = async () => {

    if (!id) {

      setError("No se encontró el blog");

      setLoading(false);

      return;

    }
    
    try {

      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

        setBlog({ id: docSnap.id, ...docSnap.data() } as IBlog);
        setLoading(false);

      } else {

        setError("Error al obtener el blog");

      }
    } catch (error) {

      console.error("Error fetching blogs: ", error);
      setError("Error al obtener el blog");

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchBlog();
  
  }, []);

  return { blog, loading, error };
};

export default useBlogDetail;
