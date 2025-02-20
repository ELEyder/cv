import styles from "./indes.module.css";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import useBlogDetail from "../../hooks/useBlogDetail";

const BlogDetail = () => {
  const { id } = useParams<{ id?: string }>();

  const { blog, loading, error } = useBlogDetail(id);

  const img =
    blog.type == "travel"
      ? "images/posts/travel.webp"
      : blog.type == "music"
      ? "images/posts/music.webp"
      : "images/posts/generic.webp";

  if (loading) return <Loading />;

  if (error)
    return (
      <section className={styles.main}>
        <div
          className={styles.title}
          style={{
            backgroundImage: `linear-gradient(var(--shadown), var(--shadown)), url(${img})`,
          }}
        >
          <h1>{error}</h1>
        </div>
      </section>
    );

  return (
    <>
      <section className={styles.main}>
        <div
          className={styles.title}
          style={{
            backgroundImage: `linear-gradient(var(--shadown), var(--shadown)), url(${img})`,
          }}
        >
          <h1>{blog.title}</h1>
          <p className={styles.date}>
            {blog.dateCreate?.toDate().toLocaleString()}
          </p>
        </div>
        <section className={styles.blog}>
          <div className={styles.content}>
            <p>{blog.content}</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default BlogDetail;
