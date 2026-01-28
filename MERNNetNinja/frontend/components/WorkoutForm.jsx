import React, { useState } from 'react'
import useWorkoutsContext from '../src/hooks/useWorkoutsContext'


const WorkoutForm = () => {
  const {dispatch} = useWorkoutsContext();
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [additionalNotes, setAdditionalNotes] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps, additionalNotes }

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    } else {
      setError(null)
      setEmptyFields([])
      console.log('new workout added')
      dispatch({type: 'CREATE_WORKOUT', payload: json})
      setTitle('')
      setLoad('')
      setReps('')
      setAdditionalNotes('')
      
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Add a new workout</h3>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Exercise Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${emptyFields.includes('title') ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Load (in kg)</label>
          <input
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${emptyFields.includes('load') ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Reps</label>
          <input
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${emptyFields.includes('reps') ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Additional Notes</label>
          <input
            type="text"
            onChange={(e) => setAdditionalNotes(e.target.value)}
            value={additionalNotes}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Add Workout</button>

        {error && (<div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">{error}</div>)}
      </form>
    </>
  )
}

export default WorkoutForm
