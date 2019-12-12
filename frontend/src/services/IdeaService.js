import ideas from './ideas';

export const saveIdea = (idea) => {

}

export const getIdeas = () => {

    let ideas = localStorage.getItem('ideas');

    if (!ideas) {
        ideas = initializeIdeas();
        localStorage.setItem('ideas', ideas);
        return ideas;
    }

    return ideas;
}

const initializeIdeas = () => {
    return [{
        title: "My First Idea!",
        body: "What is going in your mind!"
    }]
}