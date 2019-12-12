import ideas from './ideas';

export const saveIdea = (idea) => {

}

export const getIdeas = () => {

    let data = localStorage.getItem('data');

    if (!data) {
        const ideas = initializeIdeas();
        localStorage.setItem('data', JSON.stringify({ ideas: ideas }));
        return ideas;
    }

    return JSON.parse(data).ideas;
}

const initializeIdeas = () => {

    const date = new Date().toDateString();
    const firstIdea = {
        id: 1,
        title: "My First Idea!",
        body: "What is going in your mind!",
        createdOn: date
    };

    return [firstIdea];
}