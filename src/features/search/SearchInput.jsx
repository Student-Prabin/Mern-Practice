import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useNavigate, useSearchParams } from "react-router";

export default function SearchInput({ isNav, setSearchParams }) {

  const nav = useNavigate();
  return (
    <div className="p-5">
      <Formik
        initialValues={{
          query: ''
        }}
        onSubmit={(val, { resetForm }) => {
          if (isNav) {
            nav(`/movie-search/?query=${val.query}`)
          } else {
            setSearchParams({ query: val.query });
          }

          resetForm();
        }}
      >
        {({ handleChange, values, handleSubmit }) => (
          <form onSubmit={handleSubmit} className=" flex gap-5">
            <div className="w-[300px]">
              <Input
                name="query"
                value={values.query}
                onChange={handleChange}
                label="Search Movie"
                icon={<i className="fas fa-search" />}
              />
            </div>
            <Button type="submit">Submit</Button>

          </form>
        )}
      </Formik>

    </div>
  )
}