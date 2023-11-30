import PropTypes from 'prop-types';

const List = ({ todos }) => {
    return (
        <ul className="p-6 space-y-4 bg-white bg-opacity-25 border border-gray-200 shadow-xl rounded-xl backdrop-filter backdrop-blur-lg">
            {todos.map((todo) => (
                <li key={todo.id} className="p-2 font-semibold transition-transform duration-200 ease-in-out transform bg-white bg-opacity-25 border border-gray-200 shadow-xl rounded-xl backdrop-filter backdrop-blur-lg hover:scale-105">
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};

List.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default List;