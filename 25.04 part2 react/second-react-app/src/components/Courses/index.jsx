import React from 'react';

const Courses = ({ data }) => {
  return (
    <>
      <div className="row d-flex justify-content-center my-4">
        {data &&
          data.map((q,idx) => {
            return (
              <div className="col-lg-4" key={idx}>
                <div className="card" key={idx}  style={{ width: '18rem'}}>
                  <img className="card-img-top" src={q.img} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{q.name}</h5>
                    <p className="card-text">
                     {q.price}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Courses;
