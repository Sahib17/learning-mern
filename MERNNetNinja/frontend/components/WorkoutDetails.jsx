import React from 'react'
import useWorkoutsContext from '../src/hooks/useWorkoutsContext';
import { Trash } from 'lucide-react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const WorkoutDetails = ({ workout }) => {
  const {dispatch} = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: 'DELETE'
    })
    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
        
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{workout.title}</h4>
        
        <div className="space-y-1 text-sm text-gray-700">
          <p><strong className="font-medium text-gray-900">Load (kg): </strong>{workout.load}</p>
          <p><strong className="font-medium text-gray-900">Reps: </strong>{workout.reps}</p>
          <p><strong className="font-medium text-gray-900">Additional Notes: </strong>{workout.additionalNotes}</p>
          <span className="cursor-pointer inline-flex items-center px-3 py-1 rounded-md text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50 hover:text-red-700 active:scale-95 transition" onClick={handleClick}><Trash /></span>
        </div>

        <p className="text-xs text-gray-500 mt-3">{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>

      </div>
    </>
  )
}

export default WorkoutDetails
