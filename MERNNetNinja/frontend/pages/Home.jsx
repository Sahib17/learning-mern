import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
// import { useState } from 'react'

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from '../components/WorkoutForm';
import useWorkoutsContext from '../src/hooks/useWorkoutsContext';

const Home = () => {
  // const [workouts, setWorkouts] = useState([])
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()
      console.log(json)

      if (response.ok) {
        // setWorkouts(json)
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    fetchWorkouts()
  }, [dispatch])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left: workout list */}
        <div className="md:col-span-2 space-y-4">
          {workouts && workouts.map((workout) => {
            return <WorkoutDetails key={workout._id} workout={workout} />
          })}
        </div>

        {/* Right: form */}
        <div className="md:col-span-1">
          <WorkoutForm />
        </div>

      </div>
    </>
  )
}

export default Home
