
import { Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useNavigate } from "react-router";

export default function SearchInput({ isNav }) {
  const nav = useNavigate();
  return (
    <div className="p-5">
      <Formik
        initialValues={{
          query: ''
        }}
        onSubmit={(val, { resetForm }) => {

          if (isNav) nav(`/movie-search/${val.query}`)

          resetForm();
        }}
      >
        {({ handleChange, values, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="max-w-[400px]">
            <div>
              <Input
                name="query"
                value={values.query}
                onChange={handleChange}
                label="Search Movie" />
            </div>

          </form>
        )}
      </Formik>

    </div>
  )
}
