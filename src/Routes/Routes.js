import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-lemon-three.vercel.app/news')
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`https://dragon-news-server-lemon-three.vercel.app/news/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-lemon-three.vercel.app/category/${params.id}`)
            }
        ],
    },
    {
        path: '*',
        element: <div className="text-center">
            <h1>404</h1>
            <h2>Not Found</h2>
            <p className="text-danger fw-bold">There is nothing!</p>
        </div>
    }
]);