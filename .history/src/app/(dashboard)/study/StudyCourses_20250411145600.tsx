const StudyCourses = () => {
  return ({courses &&
    courses?.length > 0 &&
    courses.map((item) => (
      <CourseItem
        key={item.slug}
        data={item}
        cta="Tiếp tục học"
        url="/"
      ></CourseItem>
    ))})
};

export default StudyCourses;
