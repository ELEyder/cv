import styles from "./index.module.css";
import { BlogCard, Loading } from "../../components";
import useBlog from "../../hooks/useBlog";

const Blog = () => {
  const { blogs, loading, error } = useBlog();

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className={styles.blogs}>
        <div className={styles.head}>
          <h1>One Blog</h1>
          <p>Un vistazo personal al fascinante mundo de la tecnología.</p>
        </div>
        <div className={styles.content}>
          {blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                dateCreate={blog.dateCreate}
                type={blog.type}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
