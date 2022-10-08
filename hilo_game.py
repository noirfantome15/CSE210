"""
Tic-Tac-Toe

W04 Prove: Developer - Team Code Submission

Created by:
Emanuel Herrera

Last updated by 10/07/2022
"""

#Main, will run until game is over
def main():
    points = score(300)    
    points.show()

#tracks the score of the game
class score:
    def __init__(self, score):
        self.score = score

    def calculate(cls, score, guessed):
        if guessed == "Yes":
            return cls(score = score + 100)
        else:
            return cls(score = score - 70)

    def show(self):
        print(f"Your score is: {score}")
    

# Runs the main function
if __name__ == "__main__":
    main()