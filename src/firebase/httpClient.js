const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjc5YjYwYjQ3NzMxZTI5NGJhN2U3MjQ5OWQ5YzI2NSIsInN1YiI6IjY0MGNhNDUxYTZjMTA0MDBjMGMzZDlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FnlH0HpdH3zFuu1ADVDHKUFwxl55WoYwvdCmBSJC4cU",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}