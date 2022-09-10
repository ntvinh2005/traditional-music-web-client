import Landing from "./components/layout/Landing";
import Home from "./components/layout/Home";

import Studio from "./components/layout/Studio";
import Course from "./components/course/Course"
import Test from "./components/layout/Test"

import CreatePost from "./components/posts/CreatePost";
import Post from "./components/posts/Post"

import Auth from "./components/auth/Auth"
import PrivateRoute from "./components/auth/PrivateRoute";

import AuthContextProvider from "./contexts/AuthContext";
import CourseContextProvider from "./contexts/CourseContext";
import PostContextProvider from "./contexts/PostContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CourseContextProvider>
          <PostContextProvider>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Landing></Landing>} />
                <Route
                  exact
                  path="/home"
                  element={
                    <PrivateRoute>
                    <Home></Home>
                    </PrivateRoute>
                  }
                />
                <Route
                  exact
                  path="/studio"
                  element={
                    <Studio></Studio>
                  }
                />
                <Route
                  exact
                  path="/test"
                  element={
                    <Test></Test>
                  }
                />
                <Route
                  exact 
                  path="/course/:courseId"
                  element={ <Course/>}
                />
                <Route
                  exact 
                  path="/course/createLessons/:courseId"
                  element={ <CreatePost/>}
                />
                <Route
                  exact 
                  path="/post/:postId"
                  element={<Post/>}
                />
                <Route path="/login" element={<Auth authRoute = {"login"}></Auth>} />
                <Route path="/register" element={<Auth authRoute = {"register"}></Auth>} />
              </Routes>
            </BrowserRouter>
          </PostContextProvider>
        </CourseContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
