package com.crickinformer.cricketApp.repository;

import com.crickinformer.cricketApp.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Matchrepo extends JpaRepository<Match, Integer> {
    Optional<Match> findByTeamHeading(String teamHeading);
}
