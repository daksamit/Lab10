import { Link } from 'react-router-dom';

const PostsTable = ({ posts }) => {
  if (posts.length === 0) {
    return <div className="alert alert-warning mb-0">Brak postow do wyswietlenia.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle mb-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tytul</th>
            <th>Podglad tresci</th>
            <th>Szczegoly</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => {
            const postId = item._id || item.id;

            return (
              <tr key={postId}>
                <td>{postId}</td>
                <td>{item.title}</td>
                <td>{item.text.slice(0, 70)}...</td>
                <td>
                  <Link to={`/posts/${postId}`} className="btn btn-sm btn-outline-primary">
                    Szczegoly
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
