export class IdeaService {

    saveIdea = (idea) => {
        console.log('saving', idea);
        if (idea.id > 0) {
            return this.updateIdea(idea);
        }
        else {
            return this.addNewIdea(idea);
        }
    }

    addNewIdea = (idea) => {
        console.log('addNewIdea', idea);
        const ideas = this.getIdeas();

        idea.id = ideas.length + 1;
        idea.createdOn = this.getNowDate();
        idea.light = this.randomLight();

        ideas.push(idea);
        this.setIdeas(ideas);

        return idea;
    }

    updateIdea = (idea) => {
        const ideas = this.getIdeas();
        let foundIndex;

        for (let i = 0; i < ideas.length; i++) {
            if (ideas[i].id === idea.id) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex >= 0) {
            ideas[foundIndex].title = idea.title;
            ideas[foundIndex].body = idea.body;
            ideas[foundIndex].updatedOn = this.getNowDate();
        }

        this.setIdeas(ideas);
        return idea;
    }

    deleteIdea = (idea) => {
        console.log('deleting', idea);
        const ideas = this.getIdeas();
        let deleteIndex;

        for (let i = 0; i < ideas.length; i++) {
            if (ideas[i].id === idea.id) {
                deleteIndex = i;
                break;
            }
        }

        if (deleteIndex >= 0) {
            ideas.splice(deleteIndex, 1);
        }

        this.setIdeas(ideas);
    }

    getIdeas = () => {
        let data = localStorage.getItem('data');
        if (!data) {
            const ideas = this.initializeIdeas();
            this.setIdeas(ideas);
            return ideas;
        }
        return JSON.parse(data).ideas;
    }

    initializeIdeas = () => {
        const date = this.getNowDate();
        const firstIdea = {
            id: 1,
            title: "My First Idea!",
            body: "What is going in your mind!",
            createdOn: date
        };

        return [firstIdea];
    }

    setIdeas = (ideas) => {
        localStorage.setItem('data', JSON.stringify({ ideas: ideas }));
    }

    getNowDate() {
        return new Date().toDateString();
    }

    initializeDefaultIdea() {
        return { title: "", body: "" };
    }

    randomLight() {

        var lights = [
            'bright',
            'high',
            'dark',
            'paper'
        ];

        var randomNumber = Math.floor(Math.random() * lights.length);

        return lights[randomNumber];
    }
}
