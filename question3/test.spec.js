const Connect4 = require("./main");

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    let game;
    game = new Connect4();
    expect(game.play(0)).toBe("Player 1 has a turn");
    expect(game.play(0)).toBe("Player 2 has a turn");

    game = new Connect4();
    expect(game.play(0)).toBe("Player 1 has a turn");
    expect(game.play(1)).toBe("Player 2 has a turn");
    expect(game.play(0)).toBe("Player 1 has a turn");
    expect(game.play(1)).toBe("Player 2 has a turn");
    expect(game.play(0)).toBe("Player 1 has a turn");
    expect(game.play(1)).toBe("Player 2 has a turn");
    expect(game.play(0)).toBe("Player 1 wins!");

    game = new Connect4();
    expect(game.play(4)).toBe("Player 1 has a turn");
    expect(game.play(4)).toBe("Player 2 has a turn");
    expect(game.play(4)).toBe("Player 1 has a turn");
    expect(game.play(4)).toBe("Player 2 has a turn");
    expect(game.play(4)).toBe("Player 1 has a turn");
    expect(game.play(4)).toBe("Player 2 has a turn");
    expect(game.play(4)).toBe("Column full!");

    game = new Connect4();
    expect(game.play(1)).toBe("Player 1 has a turn");
    expect(game.play(1)).toBe("Player 2 has a turn");
    expect(game.play(2)).toBe("Player 1 has a turn");
    expect(game.play(2)).toBe("Player 2 has a turn");
    expect(game.play(3)).toBe("Player 1 has a turn");
    expect(game.play(3)).toBe("Player 2 has a turn");
    expect(game.play(4)).toBe("Player 1 wins!");
    expect(game.play(4)).toBe("Game has finished!");
  });
});
